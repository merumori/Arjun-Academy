const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const admissionRoutes = require("./routes/admissionRoutes");
const teacherRoutes = require('./routes/teacherRoutes');
const path = require('path');
const teacherDetailsRoutes = require('./routes/teacherDetailsRoutes.js');
const classRoutes = require('./routes/classRoutes');
dotenv.config();

const app = express();

// Serve static files from the "uploads" folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static('uploads'));

// Use CORS middleware
app.use(cors());

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set view engine for EJS
app.set("view engine", "ejs");

// Routes
app.use("/", admissionRoutes);
app.use('/teachers', teacherRoutes);
app.use("/singalteacher", teacherDetailsRoutes);
app.use('/api', classRoutes);
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000, // Timeout if connection takes too long
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
