const express = require('express');
const router = express.Router();

/* GET home page. */
const pokemonRouter = require('./pokemon.api.js')



//khi dan prokemonRouter thi phai router.use
router.use('/pokemons',pokemonRouter); 

router.get('/', function(req, res, next) {
res.status(200).send("Welcome to the Pokemon database!")
});



module.exports = router;
