const mongoose = require("mongoose");

const connection =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mongo-test";

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
