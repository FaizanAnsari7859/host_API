const mongoose = require("mongoose");

//uri = "mongodb+srv://test:OXdjzF8o5vYsf8XM@cluster0.imjwlti.mongodb.net/test?appName=Cluster0"

const connectDB = async (uri) => {
 return mongoose.connect(uri);
  //console.log("MongoDB Connected");
};

module.exports = connectDB;


