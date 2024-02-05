const express = require("express");
const router = express.Router();
const {
  getAllMovies,
  getMovie,
  createMovie,
  deleteMovie,
  updateMovie,
} = require("../controllers/moviesController");

router
  // get all movies
  .get("/", getAllMovies)

  // get a single movies
  .get("/:id", getMovie)

  // create a single Movies
  .post("/", createMovie)

  // delete a single Movies
  .delete("/:id", deleteMovie)

  // update a single Movies
  .patch("/:id", updateMovie);

// export all routes
module.exports = router;
