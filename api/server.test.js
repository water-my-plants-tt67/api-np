const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db("users").del();
});
afterAll(async () => {
  await db.destroy();
});
const user = {
  username: "nathan",
  password: "yeehaw",
  telephone: "555-555-5555",
};

const login = {
  username: "nathan",
  password: "yeehaw",
};

test("sanity", () => {
  expect(true).toBe(true);
});

describe("[POST] /users/register", () => {
  it("Register a new user", async () => {
    const response = await request(server).post("/users/register").send(user);
    expect(response.body.Message).toBe("User nathan created!");
  });
  it("Bad register attempt", async () => {
    const response = await request(server).post("/users/register").send(login);
    console.log(response.body);
    expect(response.body).toBe(
      'insert into "users" ("password", "username") values ($1, $2) - null value in column "telephone" violates not-null constraint'
    );
  });
});

describe("[POST] /users/login", () => {
  it("Log's in a user", async () => {
    await request(server).post("/users/register").send(user);
    const response = await request(server).post("/users/login").send(login);
    expect(response.body).toHaveProperty("token");
  });
  it("Bad Login", async () => {
    const response = await request(server).post("/users/login").send(user);
    expect(response.body.Message).toBe(
      "Data is not structured in a way that is usable for the API please read the documentation!"
    );
  });
});

describe("[GET] /dummydata", () => {
  it("Retrieves dummy data", async () => {
    const response = await request(server).get("/dummydata");
    expect(response.body.length).toBe(6);
  });
});
