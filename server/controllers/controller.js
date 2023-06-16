const { generatedToken } = require("../helper/generateToken");
const { checkPassword } = require("../helper/hashingPassword");
const { Product, User, Category, History } = require("../models");
const { OAuth2Client } = require("google-auth-library");

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

class Controller {
  static async handleCreateProduct(request, response, next) {
    try {
      // getting data from text input
      // console.log(request, '++++++++++++++++++++');
      const { name, description, price, stock, imgUrl, categoryId } =
        request.body;
      const authorId = request.userData.userId;

      const createProduct = await Product.create({
        name,
        description,
        price,
        stock,
        imgUrl,
        categoryId,
        authorId,
      });

      const userFound = await User.findByPk(authorId);

      const createHistory = await History.create({
        name: createProduct.name,
        description: `New product with id ${createProduct.id} created`,
        updatedBy: userFound.email,
      });

      response.status(201).json({
        statusCode: 201,
        message: "Product created successfully",
        data: createProduct,
      });
    } catch (err) {
      next(err);
    }
  }

  static async readProduct(request, response, next) {
    try {
      const readProducts = await Product.findAll({
        include: [
          {
            model: User,
            attributes: [
              "id",
              "username",
              "email",
              "role",
              "phoneNumber",
              "address",
              "createdAt",
              "updatedAt",
            ],
          },
        ],
        order: [["createdAt", "DESC"]],
      });

      // console.log(readProducts[0].User);
      const countProducts = await Product.count();

      response.status(200).json({
        statusCode: 200,
        data: { readProducts, countProducts },
      });
    } catch (err) {
      next(err);
    }
  }

  static async readProductById(request, response, next) {
    try {
      const productId = request.params.id;

      const readProduct = await Product.findByPk(productId);

      if (readProduct === null) {
        throw {
          name: "NOT_FOUND",
        };
      }

      response.status(200).json({
        statusCode: 200,
        data: readProduct,
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteProductById(request, response, next) {
    try {
      const productId = request.params.id;

      const productFound = await Product.findByPk(productId);
      // console.log(productFound.name);

      const affectedRows = await Product.destroy({
        where: {
          id: productId,
        },
      });

      if (affectedRows === 0) {
        throw {
          name: "NOT_FOUND",
        };
      }

      response.status(200).json({
        statusCode: 200,
        message: `Product ${productFound.name} deleted successfully`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async readCategories(request, response, next) {
    try {
      const readCategories = await Category.findAll();

      const countCategories = await Category.count();

      response.status(200).json({
        statusCode: 200,
        data: { readCategories, countCategories },
      });
    } catch (err) {
      next(err);
    }
  }

  static async readCategoryById(request, response, next) {
    try {
      const categoryId = request.params.id;

      const readCategory = await Category.findByPk(categoryId);

      if (readCategory === null) {
        throw {
          name: "NOT_FOUND",
        };
      }

      response.status(200).json({
        statusCode: 200,
        data: readCategory,
      });
    } catch (err) {
      next(err);
    }
  }

  static async handleCreateCategories(request, response, next) {
    try {
      const { name } = request.body;

      const createCategory = await Category.create({
        name,
      });

      response.status(201).json({
        statusCode: 201,
        message: "Category created successfully",
        data: { id: createCategory.id, name: createCategory.name },
      });
    } catch (err) {
      next(err);
    }
  }

  static async updateCategories(request, response, next) {
    try {
      const { id } = request.params;
      const { name } = request.body;
      const authorId = request.userData.userId;
      // console.log(id, "====================================");

      const affectedRows = await Category.update(
        {
          name,
        },
        {
          where: { id },
        }
      );

      if (affectedRows === 0) {
        throw {
          name: "NOT_FOUND",
        };
      }

      const categoryFound = await Category.findByPk(id);
      const userFound = await User.findByPk(authorId);

      await History.create({
        name: categoryFound.name,
        description: `Category with id ${categoryFound.id} updated`,
        updatedBy: userFound.email,
      });

      response.status(200).json({
        statusCode: 200,
        message: `Category with id ${categoryFound.id} updated`,
        data: categoryFound,
      });
    } catch (err) {
      next(err);
    }
  }

  static async deleteCategory(request, response, next) {
    try {
      const categoryId = request.params.id;

      const categoryFound = await Category.findByPk(categoryId);

      const affectedRows = await Category.destroy({
        where: {
          id: categoryId,
        },
      });

      if (affectedRows === 0) {
        throw {
          name: "NOT_FOUND",
        };
      }

      response.status(200).json({
        statusCode: 200,
        message: `Product ${categoryFound.name} deleted successfully`,
      });
    } catch (err) {
      next(err);
    }
  }

  static async register(request, response, next) {
    try {
      const { username, email, password, role, phoneNumber, address } =
        request.body;

      const registerUser = await User.create({
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      });

      // const findRegisteredUser = await User.findOne({
      //     attributes: ['id', 'email'],
      //     where: {
      //         email
      //     }
      // });

      response.status(201).json({
        statusCode: 201,
        message: "User created successfully",
        data: { id: registerUser.id, email: registerUser.email },
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async login(request, response, next) {
    try {
      const { email, password } = request.body;
      // console.log(request.body, "===============================");
      const findData = await User.findOne({
        where: {
          email,
        },
      });
      // console.log(findData.password);

      if (!findData) {
        throw { name: "NOT_FOUND" };
      }

      const validatePassword = checkPassword(password, findData.password);
      // console.log(validatePassword);

      if (!validatePassword) {
        throw { name: "INVALID" };
      }

      const token = generatedToken({
        id: findData.id,
        email: findData.email,
      });

      const data = { token, email: findData.email, role: findData.role };

      // console.log(myToken);
      response.status(200).json({
        statusCode: 200,
        message: "Login success",
        data,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async loginGoogle(request, response, next) {
    try {
      // console.log(request.body);
      const { myToken } = request.body;
      // console.log(token);
      const client = new OAuth2Client({
        clientId: process.env.GOOGLE_CLIENT_ID,
      });
      const ticket = await client.verifyIdToken({
        idToken: myToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      // console.log(ticket);

      const payload = ticket.getPayload();
      // console.log(payload);
      const username = `${payload.given_name}${payload.family_name}`;
      const email = payload.email;
      const password = generateRandomPassword();
      // console.log(password);
      const role = "Staff";

      const [user, create] = await User.findOrCreate({
        where: { email },
        defaults: { username, password, role },
        hooks: false,
      });

      // console.log(findOrCreate);

      const token = generatedToken({
        id: user.id,
        email: user.email,
      });

      const data = { token, email, role };

      response.status(200).json({
        statusCode: 200,
        message: "Login sukses",
        data,
      });
    } catch (err) {
      // console.log(err);
      next(err);
    }
  }

  static async updateProduct(request, response, next) {
    try {
      const { id } = request.params;
      const { name, description, price, stock, imgUrl, categoryId } =
        request.body;
      const authorId = request.userData.userId;
      // console.log(id, "====================================");

      const affectedRows = await Product.update(
        {
          name,
          description,
          price,
          stock,
          imgUrl,
          categoryId,
          // authorId
        },
        {
          where: { id },
        }
      );

      if (affectedRows === 0) {
        throw {
          name: "NOT_FOUND",
        };
      }

      const productFound = await Product.findByPk(id);
      const userFound = await User.findByPk(authorId);

      await History.create({
        name: productFound.name,
        description: `Product with id ${productFound.id} updated`,
        updatedBy: userFound.email,
      });

      response.status(200).json({
        statusCode: 200,
        message: `Product with id ${productFound.id} updated`,
        data: productFound,
      });
    } catch (err) {
      next(err);
    }
  }

  static async setStatus(request, response, next) {
    try {
      const { status } = request.body;
      const { id } = request.params;
      const { userId } = request.userData;
      console.log(id, "=================================");

      const product = await Product.findByPk(id);
      const oldStatus = product.status;
      // console.log(product, 'ini adalah produk =====================================');
      // console.log(oldStatus, 'ini adalah old Status ================================');

      const affectedRows = await Product.update(
        {
          status,
        },
        {
          where: { id },
        }
      );

      if (affectedRows === 0) {
        throw {
          name: "NOT_FOUND",
        };
      }

      const productFound = await Product.findByPk(id);
      const userFound = await User.findByPk(userId);
      // console.log(productFound.name, '===============');

      await History.create({
        name: productFound.name,
        description: `Product with id ${productFound.id} status has been updated from ${oldStatus} to ${productFound.status}`,
        updatedBy: userFound.email,
      });

      response.status(200).json({
        statusCode: 200,
        message: `Product with id ${productFound.id} status has been updated from ${oldStatus} to ${productFound.status}`,
        data: productFound,
      });
    } catch (err) {
      next(err);
    }
  }

  static async readHistories(request, response, next) {
    try {
      const readHistories = await History.findAll({
        order: [["createdAt", "DESC"]],
      });

      response.status(200).json({
        statusCode: 200,
        data: { readHistories },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
