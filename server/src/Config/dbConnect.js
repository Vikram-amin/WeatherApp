const mongoose = require("mongoose");

class Mongo {
  constructor() {
    this.createMongoConnection();
  }

  createMongoConnection() {
    mongoose.connect(
      `mongodb+srv://masaiUser:2jf2zwDcFTTyKCM4@cluster0.zu436.mongodb.net/fav_city?retryWrites=true&w=majority`
    );

    mongoose.connection.once("open", () => {
      console.log("MongoDB is connected");
    });
    
    mongoose.connection.on("error", () => {
      console.log("Error occured in mongoDB connection");
    });
  }
}

module.exports = Mongo;
