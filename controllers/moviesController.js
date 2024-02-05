const Movie = require("../models/modelMovies");

// get all movies
const getAllMovies = async (req, res) => {
    const movies = await Movie.find({}).sort({createdAt: -1});
    res.status(200).json(movies);
};

// get a single movie
const getMovie = async (req, res) => {
    const {id} = req.params;

    try {
        const movie = await Movie.findById(id);
        res.status(200).json(movie);
    } catch (error) {
        res.status(404).json({error: "Movie not found"});
    }
};
// create new movie
const createMovie = async (req, res) => {
    const {title, year, director, image, duration} = req.body;
    try {
        const movie = await Movie.create({
            title,
            year,
            director,
            image,
            duration,
        });
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// delete a sinle movie
const deleteMovie = async (req, res) => {
    const {id} = req.params;

    try {
        const movie = await Movie.findOneAndDelete({_id: id});
        res.status(200).json(movie);
    } catch (error) {
        res.status(404).json({error: "Movie not found"});
    }
};

// update a sinle movie
const updateMovie = async (req, res) => {
    const {id} = req.params;

    try {
        const movie = await Movie.findOneAndUpdate({_id: id}, {...req.body});
        res.status(200).json(movie);
    } catch (error) {
        res.status(404).json({error: "Movie not found"});
    }
};

module.exports = {
    getAllMovies,
    getMovie,
    createMovie,
    deleteMovie,
    updateMovie,
};
