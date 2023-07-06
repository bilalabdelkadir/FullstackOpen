const User = require("../models/users");
const userRouter = require("express").Router();
const bcrypt = require("bcrypt");

userRouter.post("/", async (request, response) => {
  const { username, name, password } = request.body;

  if (username.length < 3 || name.length < 3) {
    return response
      .status(400)
      .json({ message: "username and user must be longer than 3 char" });
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

module.exports = userRouter;
