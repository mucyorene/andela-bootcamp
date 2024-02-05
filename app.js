// dotenv
require("dotenv").config();
// express
const express = require("express");
const app = express();

// // movies routes
const moviesRoutes = require("./routes/movies");

// env
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

// // mongoose
const mongoose = require("mongoose");

// // ************* middleware******************
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// // ************* routes ******************
app.get("/", (req, res) => {
  res.json({ mssg: "hello there" });
});
app.use("/api/movies", moviesRoutes);

// // ************* Connection ******************
mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(port, () => {
      console.log(`movies database connection established successfully`);
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// app.listen(port, () => {
//   console.log(`movies database connection established successfully`);
//   console.log(`Server running on port ${port}`);
// });
