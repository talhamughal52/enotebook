const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = () => {
  mongoose.connect(process.env.mongoURI);
  // mongoose.connect(process.env.mongoURI, () => {
  //   console.log("Connected to Mongo Successfully");
  // });
};

module.exports = connectToMongo;
