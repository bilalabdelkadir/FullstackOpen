const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

// this is a test to chech if the return value for get is json
test("blog lists are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
}, 10000);

afterAll(async () => {
  await mongoose.connection.close();
});
