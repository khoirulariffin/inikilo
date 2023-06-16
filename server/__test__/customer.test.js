const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { hashPassword } = require("../helper/hashingPassword");
const { Customer } = require("../models");
const {
  seedCategories,
  seedUsers,
  seedProducts,
  seedCustomer,
  seedFavorites,
} = require("../lib/createItems");
const {
  dropCategories,
  dropUsers,
  dropProducts,
  dropCustomers,
  dropFavorites,
} = require("../lib/dropItems");

beforeAll(async () => {
  seedCategories();
  seedUsers();
  seedProducts();
  seedCustomer();
  seedFavorites();
});
afterAll(async () => {
  dropCategories();
  dropUsers();
  dropProducts();
  dropCustomers();
  dropFavorites();
});

describe("Customer POST /register", () => {
  it("should return success when register customer", async () => {
    const email = "arif@mail.com";
    const password = "123456";

    const result = await request(app)
      .post("/pub/register")
      .send({
        email,
        password,
      })
      .expect(201);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(201);
    expect(result.body.message).toBe("User Created");
    expect(result.body.user).toHaveProperty("id", expect.any(Number));
    expect(result.body.user).toHaveProperty("email", expect.any(String));
    expect(result.body.user).toHaveProperty("role");
    expect(result.body.user.role).toBe("customer");
  });
  it("should return error when email is null", async () => {
    const email = null;
    const password = "123456";

    const result = await request(app)
      .post("/pub/register")
      .send({
        email,
        password,
      })
      .expect(400);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(400);
    expect(result.body.message).toBe("Email is required!");
  });
  it("should return error when email is empty", async () => {
    const email = "";
    const password = "123456";

    const result = await request(app)
      .post("/pub/register")
      .send({
        email,
        password,
      })
      .expect(400);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(400);
    expect(result.body.message).toBe("Email is required!");
  });
  it("should return error when password is null", async () => {
    const email = "arif@mail.com";
    const password = null;

    const result = await request(app)
      .post("/pub/register")
      .send({
        email,
        password,
      })
      .expect(400);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(400);
    expect(result.body.message).toBe("Password is required!");
  });
  it("should return error when password is empty", async () => {
    const email = "arif@mail.com";
    const password = "";

    const result = await request(app)
      .post("/pub/register")
      .send({
        email,
        password,
      })
      .expect(400);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(400);
    expect(result.body.message).toBe("Password is required!");
  });
  it("should return error when password less than 5 character", async () => {
    const email = "arif@mail.com";
    const password = "12";

    const result = await request(app)
      .post("/pub/register")
      .send({
        email,
        password,
      })
      .expect(400);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(400);
    expect(result.body.message).toBe(
      "Password length must minimum 5 character"
    );
  });
  it("should return error when email is wrong format", async () => {
    const email = "arif";
    const password = "123456";

    const result = await request(app)
      .post("/pub/register")
      .send({
        email,
        password,
      })
      .expect(400);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(400);
    expect(result.body.message).toBe("Email not valid!");
  });
  it("should return error when email is registered", async () => {
    const email = "arif@mail.com";
    const password = "123456";

    const result = await request(app)
      .post("/pub/register")
      .send({
        email,
        password,
      })
      .expect(400);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(400);
    expect(result.body.message).toBe("email must be unique");
  });
});

describe("Login POST /login", () => {
  it("should return success when login succes", async () => {
    const email = "arif@mail.com";
    const password = "123456";

    const result = await request(app)
      .post("/pub/login")
      .send({
        email,
        password,
      })
      .expect(200);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(200);
    expect(result.body.message).toBe("Login Success");
    expect(result.body.access_token).toBeTruthy();
  });
  it("should return error when wrong password", async () => {
    const email = "arif@mail.com";
    const password = "12345";

    const result = await request(app)
      .post("/pub/login")
      .send({
        email,
        password,
      })
      .expect(401);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(401);
    expect(result.body.message).toBe("Invalid username or password");
  });
  it("should return error when wrong email", async () => {
    const email = "arif@mail.co";
    const password = "123456";

    const result = await request(app)
      .post("/pub/login")
      .send({
        email,
        password,
      })
      .expect(404);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(404);
    expect(result.body.message).toBe("Not Found");
  });
});

describe("Fetch Product GET /products", () => {
  it("should return success when fetch products without filter", async () => {
    const result = await request(app).get("/pub/products").expect(200);

    expect(typeof result.body).toBe("object");
    expect(result.body.statusCode).toBe(200);
    expect(result.body.data).toBeTruthy();
    expect(typeof result.body.data).toBe("object");
    expect(result.body.data).toHaveProperty(
      "totalProducts",
      expect.any(Number)
    );
    expect(result.body.data).toHaveProperty("products", expect.any(Array));
  });
  it("should return success when fetch products with 1 filter", async () => {
    const search = "name";
    const value = "lilian";
    const result = await request(app)
      .get(`/pub/products?search=${search}&value=${value}`)
      .expect(200);

    expect(result.body.statusCode).toBe(200);
    expect(result.body.data).toBeTruthy();
    expect(result.body.data).toHaveProperty(
      "totalProducts",
      expect.any(Number)
    );
    expect(Array.isArray(result.body.data.products)).toBe(true);
  });
  it("should return success when fetch products with pagination", async () => {
    const entityPerPage = 10;
    const page = 1;
    const result = await request(app)
      .get(`/pub/products?count=${entityPerPage}&page=${page}`)
      .expect(200);

    expect(result.body.statusCode).toBe(200);
    expect(typeof result.body.data).toBe("object");
    expect(result.body.data).toHaveProperty(
      "totalProducts",
      expect.any(Number)
    );
    expect(result.body.data).toHaveProperty("maxPage", expect.any(Number));
    expect(result.body.data).toHaveProperty("page");
    expect(result.body.data).toHaveProperty("limit");
    expect(Array.isArray(result.body.data.products)).toBe(true);
  });
  it("should return success when fetch products by id", async () => {
    const id = 2;
    const result = await request(app).get(`/pub/products/${id}`).expect(200);
    // console.log(result);

    expect(result.body).toHaveProperty("id");
    expect(result.body).toHaveProperty("name", expect.any(String));
    expect(result.body).toHaveProperty("description", expect.any(String));
    expect(result.body).toHaveProperty("price", expect.any(Number));
    expect(result.body).toHaveProperty("stock", expect.any(Number));
    expect(result.body).toHaveProperty("imgUrl", expect.any(String));
    expect(result.body).toHaveProperty("categoryId", expect.any(Number));
    expect(result.body).toHaveProperty("status");
    expect(result.body).toHaveProperty("Category");
  });
  it("should return error when fetch products by id, but id not not exist", async () => {
    const id = 21;
    const result = await request(app).get(`/pub/products/${id}`).expect(404);

    expect(result.body.statusCode).toBe(404);
    expect(result.body.message).toBe("Not Found");
  });
});
describe("Fetch Favorites GET /customer/favorites", () => {
  it("should return success when fetching favorite list from the logged in customer", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhaWtvQG1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjgzMjEyNzQyfQ.sO-1zipr-yxL44MzeFxiROCMGo4h_cm-O8PAmdSBSP0";
    const result = await request(app)
      .get(`/pub/customer/favorites`)
      .set("access_token", token)
      .expect(200);

    expect(result.body).toHaveProperty("id", expect.any(Number));
    expect(result.body).toHaveProperty("email", expect.any(String));
    expect(result.body).toHaveProperty("totalFavorites");
    expect(result.body).toHaveProperty("favorites");
    expect(result.body.favorites).toHaveLength(0);
  });
  it("should return success when add a favorite", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhaWtvQG1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjgzMjEyNzQyfQ.sO-1zipr-yxL44MzeFxiROCMGo4h_cm-O8PAmdSBSP0";
    const IdProduct = 9;
    const IdCustomer = 1;
    const result = await request(app)
      .post(`/pub/products/${IdProduct}/favorite`)
      .set("access_token", token)
      .send({
        IdCustomer,
        IdProduct,
      })
      .expect(201);

    expect(result.body.statusCode).toBe(201);
    expect(result.body.message).toBe("Favorite has been added");
    expect(result.body.data.IdProduct).toBe(IdProduct);
    expect(result.body.data.IdCustomer).toBe(IdCustomer);
  });
  it("should return error when id product not available", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhaWtvQG1haWwuY29tIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjgzMjEyNzQyfQ.sO-1zipr-yxL44MzeFxiROCMGo4h_cm-O8PAmdSBSP0";
    const IdProduct = 21;
    const IdCustomer = 1;
    const result = await request(app)
      .post(`/pub/products/${IdProduct}/favorite`)
      .set("access_token", token)
      .send({
        IdCustomer,
        IdProduct,
      })
      .expect(404);

    expect(result.body.statusCode).toBe(404);
    expect(result.body.message).toBe("Not Found");
  });
  it("should return error when not login", async () => {
    const IdProduct = 8;
    const IdCustomer = 1;
    const result = await request(app)
      .get(`/pub/customer/favorites`)
      .expect(401);

    expect(result.body.statusCode).toBe(401);
    expect(result.body.message).toBe("Please Login First");
  });
  it("should return error when token not valid", async () => {
    const IdProduct = 8;
    const IdCustomer = 1;
    const email = "arif@mail.com";
    const password = "123456";

    let token = null;

    const login = await request(app).post("/pub/login").send({
      email,
      password,
    });
    token = `${login.body.access_token}aa`;

    const result = await request(app)
      .get(`/pub/customer/favorites`)
      .set("access_token", token)
      .expect(400);
  });
});
