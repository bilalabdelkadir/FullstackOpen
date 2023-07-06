const express = require("express");
const cors = require("cors");
require("express-async-errors");
const mongoose = require("mongoose");
require("dotenv").config();
const config = require("./utils/config");
const blogsRouter = require("./controllers/blogs");
const userRouter = require("./controllers/users");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger.js");
const loginRouter = require("./controllers/login");
const app = express();

mongoose.set("strictQuery", false);

logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());

app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use("/api/blogs", blogsRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
