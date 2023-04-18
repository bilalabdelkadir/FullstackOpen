const Blog = require("../models/blogList");
const blogRouter = require("express").Router();

// get all the blog list
blogRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

// create new blog list
blogRouter.post("/", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogRouter;
