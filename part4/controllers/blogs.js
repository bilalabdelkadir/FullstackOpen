const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
  }
  return null;
};

blogsRouter.get("/", async (request, response, next) => {
  const blogs = await Blog.find({}).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });
  response.json(blogs);
});

blogsRouter.post("/", async (request, response) => {
  const body = request.body;
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }
  const user = await User.findById(decodedToken.id);

  if (!body.title || !body.url) {
    return response.status(400).json({ message: "fields are missing" });
  }

  const blog = new Blog({ ...body, user: user.id });

  const savedBlog = await blog.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();

  response.status(201).json(savedBlog);
});

blogsRouter.delete("/:id", async (request, response) => {
  const id = request.params.id;
  const deltedBlog = await Blog.findByIdAndRemove(id);
  if (deltedBlog) {
    response.status(204).end();
  } else {
    response.status(404).end();
  }
});

blogsRouter.put("/:id", async (request, response) => {
  const id = request.params.id;
  const blogdata = request.body;
  const blog = await Blog.findById(id);
  if (blog) {
    const updatedBlog = await Blog.findByIdAndUpdate(id, blogdata, {
      new: true,
    });
    response.status(200).json(updatedBlog);
  } else {
    response.status(404).end();
  }
});

module.exports = blogsRouter;
