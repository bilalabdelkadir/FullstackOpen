const Blog = require("../models/blogList");
const blogRouter = require("express").Router();

// get all the blog list
blogRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
  // Blog.find({}).then((blogs) => {
  //   response.json(blogs);
  // });
});

// create new blog list
blogRouter.post("/", (request, response) => {
  const body = request.body;
  const newBlog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
  };
  const blog = new Blog(newBlog);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogRouter;
