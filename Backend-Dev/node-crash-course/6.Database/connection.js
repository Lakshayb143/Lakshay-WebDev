const mongoose = require("mongoose");
const express = require("express");

// express app
const app = express();

//  Connection with db

main().catch((err) => console.log(err));

async function main() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/nodeC")
    .then(() => {
      console.log("Connected to MongoDB");
      // app.listen(3000);
    })
    .catch((err) => console.log(err));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// const db = mongoose.connection;

// db.once('open', () => console.log("Successfully connected to MongoDB"))
// console.log(db);
