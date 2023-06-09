"use strict";
const mongoose = require("mongoose");

const connectString = `mongodb://localhost:27017/devEcommerce`;

class Database {
  instance = null;
  constructor() {
    this.connectDB();
  }

  connectDB = async () => {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { colors: true });
    }
    try {
      const conn = await mongoose.connect(connectString);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  };

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();
module.exports = instanceMongoDb;
