const { generatedToken } = require("../helper/generateToken");
const { checkPassword } = require("../helper/hashingPassword");
const { OAuth2Client } = require("google-auth-library");
const { Customer, Product, Category, Favorite } = require("../models");
const { Op } = require("sequelize");
const axios = require("axios");

const generateRandomPassword = () => {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 12;
  let password = "";

  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
};

class CustomerController {
  static async register(request, response, next) {
    try {
      const { email, password } = request.body;
      const user = await Customer.create({ email, password });
      response.status(201).json({
        statusCode: 201,
        message: "User Created",
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      next(err);
    }
  }
  static async login(request, response, next) {
    try {
      const { email, password } = request.body;

      if (!email || !password) {
        throw { name: "Required" };
      }

      const findData = await Customer.findOne({
        where: { email },
      });

      if (!findData) {
        throw { name: "NOT_FOUND" };
      }

      const validatePassword = checkPassword(password, findData.password);

      if (!validatePassword) {
        throw { name: "INVALID" };
      }

      const access_token = generatedToken({
        id: findData.id,
        email: findData.email,
        role: findData.role,
      });

      const user = response.status(200).json({
        statusCode: 200,
        message: "Login Success",
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }
  static async loginGoogle(request, response, next) {
    try {
      const { myToken } = request.body;
      const client = new OAuth2Client({
        clientId: process.env.GOOGLE_CLIENT_ID,
      });
      const ticket = await client.verifyIdToken({
        idToken: myToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const email = payload.email;
      const password = generateRandomPassword();

      const [user, create] = await Customer.findOrCreate({
        where: { email },
        defaults: { password },
        hooks: false,
      });

      const access_token = generatedToken({
        id: user.id,
        email: user.email,
      });

      response.status(200).json({
        statusCode: 200,
        message: "Login sukses",
        access_token: access_token,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getAllProducts(request, response, next) {
    try {
      const { search, value, count, page, order, sort } = request.query;
      let maxPage = 0;

      const opt = {
        include: {
          model: Category,
        },
      };

      if (search) {
        // console.log(search);
        opt.where = {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }

      if (count && page) {
        opt.limit = count;
        opt.offset = (page - 1) * count;
      }

      if (order) {
        opt.order = [[order]];
      }

      if (sort) {
        opt.order = [[sort]];
      }

      if (order && sort) {
        opt.order = [[order, sort]];
      }

      const products = await Product.findAndCountAll(opt);
      // console.log(products);
      maxPage = Math.floor(products.count / count);

      response.status(200).json({
        statusCode: 200,
        data: {
          totalProducts: products.count,
          maxPage,
          page,
          limit: count,
          products: products.rows,
        },
      });
    } catch (error) {
      // console.log(error);
      next(error);
    }
  }
  static async getProductById(request, response, next) {
    try {
      const { id } = request.params;
      const opt = {
        method: "post",
        url: `https://api.qr-code-generator.com/v1/create?access-token=D3pVpCE6Fgq1yPtL3PEOyxeBPRgxut81ahQiC7ZZacxyTG3HiiOT94nT9XEUEHpl`,
        data: {
          frame_name: "no-frame",
          qr_code_text: `https://challenge1-inikilo.up.railway.app/pub/products/${id}`,
          image_format: "SVG",
          qr_code_logo: "scan-me-square",
        },
      };
      const product = await Product.findByPk(id, {
        attributes: {
          exclude: ["authorId", "createdAt", "updatedAt"],
        },
        include: {
          model: Category,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      });
      if (!product) {
        throw { name: "NOT_FOUND" };
      }
      const qrCode = await axios.request(opt);
      // console.log(qrCode.data);
      response.status(200).json({
        statusCode: 200,
        data: product,
        qrCode: qrCode.data,
      });
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }
  static async getFavorites(request, response, next) {
    try {
      const customerId = request.userData.userId;

      const favorites = await Favorite.findAndCountAll({
        where: {
          IdCustomer: customerId,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: {
          model: Product,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      });
      // console.log(favorites.rows[0].Product);
      response.status(200).json({
        totalFavorites: favorites.count,
        favorites: favorites.rows,
      });
    } catch (err) {
      next(err);
    }
  }
  static async addFavorites(request, response, next) {
    try {
      const customerId = request.userData.userId;
      const productId = Number(request.params.id);

      const existData = await Customer.findByPk(customerId, {
        include: [Favorite],
      });

      const existProd = existData.Favorites.filter(
        (fav) => fav.IdProduct === productId
      );

      if (existProd.length > 0) {
        throw { name: "EXIST" };
      }

      const prod = await Product.findAll();
      const prodNotVailable = prod.filter((p) => p.id === productId);

      if (prodNotVailable.length <= 0) {
        throw { name: "NOT_FOUND" };
      }

      const data = await Favorite.create({
        IdCustomer: customerId,
        IdProduct: productId,
      });
      response.status(201).json({
        statusCode: 201,
        message: "Favorite has been added",
        data,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = {
  CustomerController,
};
