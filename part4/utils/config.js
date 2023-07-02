const dotenv = require("dotenv");

const port = process.env.port;
const MONGODB_URI = process.env.MONGODB_URI;

module.exports = {
  MONGODB_URI,
  PORT,
};
