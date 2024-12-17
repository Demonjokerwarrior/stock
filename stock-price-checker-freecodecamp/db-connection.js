const mongoose = require("mongoose");
require("dotenv").config();

// Connecting to MongoDB
mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB connected successfully.");

    // Optionally perform database operations here

    // Close the connection after testing
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
  });
