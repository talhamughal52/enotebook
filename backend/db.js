const mongoose = require("mongoose");
require("dotenv").config();

// const mongoURI =
//   process.env.mongoURI ||
//   "mongodb://localhost:27017/enotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const mongoURI =
  process.env.mongoURI ||
  "mongodb+srv://talha_mughal52:fNtpeVzZIJOQskkD@enotebook.g1lncml.mongodb.net/enotebook?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(mongoURI);
  // mongoose.connect(process.env.mongoURI, () => {
  //   console.log("Connected to Mongo Successfully");
  // });
};

module.exports = connectToMongo;
