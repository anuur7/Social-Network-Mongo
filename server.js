const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');

const routes = require('./routes');

const PORT = process.env.port || 3001;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO]: Database connection successful");

    app.listen(PORT, () => 
    console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.log(`[ERROR]: Database connection failed | ${err.message}`)
  }
}