const express = require('express');
const router = express.Router();

//requerimos modelo

const Movie = require('../model/movie.model');

//ruta que me dirije a la pagina

//router.get('/movies',(req,res,next) => {
    //res.render('movies')
//})

//ruta que me plasma las movies
router.get('/movies', async (req,res,next) => {
    try{
        const movies = await Movie.find();
        res.render('movies', {movies})
    }
    catch(e){
        console.log(e)
    }
})

// ruta que me dirije a la pagina
router.get('/movies/:_id', async (req,res,next) => {
    const { _id } = req.params;
    try{
        const movies = await Movie.findById(_id)
        res.render('moviesDetail', movies);
    }
    catch(e){
        console.log(e)
    }
})

module.exports= router