const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Blog = require("../models/blogList");

const initialBlogs = [
  {
    title: "First Example",
    author: "nuh fahad",
    url: "https://github.com/fullstack-hy2020/part3-notes-backend/blob/part4-2/index.js",
    likes: 17,
  },
  {
    title: "Second Example",
    author: "Bilal Abdelkadir",
    url: "https://github.com/fullstack-hy2020/part3-notes-backend/blob/part4-2/index.js",
    likes: 10,
  },
];

// everytime we ran our database this will delete the previous test data and add our initial values
beforeEach(async () => {
  await Blog.deleteMany({});
  let blogObject = new Blog(initialBlogs[0]);
  await blogObject.save();
  blogObject = new Blog(initialBlogs[1]);
  await blogObject.save();
}, 10000);

// this is a test to chech if the return value for get is json
test("blog lists are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
}, 10000);

// this will check if our blog list have to lists
test("all blogs are returned", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(initialBlogs.length);
}, 10000);

// this will check if the content matches
test("a specific note is within the returned blogs", async () => {
  const response = await api.get("/api/blogs");

  const titles = response.body.map((r) => r.title);
  expect(titles).toContain("First Example");
}, 10000);

test("it should make sure the unique identifier should have the name id", async () => {
  const response = await api.get("/api/blogs");
  // console.log(response);

  for (const blog of response.body) {
    expect(blog.id).toBeDefined();
  }
}, 10000);

// add a blog
test("a valid blog list can be added", async () => {
  const newblog = {
    title: "Add test",
    author: "bial fahad",
    url: "https://github.com/fullstack-hy2020/part3-notes-backend/",
    likes: 9,
  };

  await api
    .post("/api/blogs")
    .send(newblog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const response = await api.get("/api/blogs");

  const titles = response.body.map((r) => r.title);
  expect(response.body).toHaveLength(initialBlogs.length + 1);
  expect(titles).toContain("Add test");
}, 10000);

test("like will have the default 0 if missing", async () => {
  const newBlog = {
    title: "blog with out like",
    author: "fake author",
    url: "https://this.isfake.url",
  };

  const response = await api.post("/api/blogs").send(newBlog);

  expect(response.body.likes).toBe(0);
}, 10000);

test;

afterAll(async () => {
  await mongoose.connection.close();
});
