const supertest = require("supertest");
const mongoose = require("mongoose");
const Blog = require("../models/blog");
const app = require("../app");

const api = supertest(app);

const initialBlogs = [
  {
    title: "this is first one",
    author: "bilal",
    url: "randomone.com",
    likes: 5,
  },
  {
    title: "this is second one",
    author: "fahad",
    url: "randomtwo.com",
    likes: 2,
  },
];

beforeEach(async () => {
  await Blog.deleteMany({});
  let blogObject = new Blog(initialBlogs[0]);
  await blogObject.save();
  blogObject = new Blog(initialBlogs[1]);
  await blogObject.save();
});

test("unique identifier property of the blog posts is named id", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body[0].id).toBeDefined();
});

test("a valid blog can be added", async () => {
  const blogObject = {
    title: "this is custom one",
    author: "bilal",
    url: "randomone.com",
    likes: 1,
  };

  await api
    .post("/api/blogs")
    .send(blogObject)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const response = await api.get("/api/blogs");

  titles = response.body.map((blog) => blog.title);

  expect(response.body).toHaveLength(initialBlogs.length + 1);
  expect(titles).toContain("this is custom one");
});

test("a blog with no like default value should be 0", async () => {
  const blogObject = {
    title: "this is custom one",
    author: "bilal",
    url: "randomone.com",
  };
  const response = await api
    .post("/api/blogs")
    .send(blogObject)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  expect(response.body.likes).toBe(0);
});

afterAll(async () => {
  await mongoose.connection.close();
});
