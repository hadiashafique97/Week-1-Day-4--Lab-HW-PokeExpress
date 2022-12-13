require("dotenv").config();
const mongoose = require("mongoose")

// Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection
const methodOverride = require('method-override')
// Connect to Mongo
mongoose.connect(mongoURI)

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

const express = require('express')
const app = express()
const Pokemon = require("./models/pokemon")
const port = 3000

app.use(express.static('public'))
app.use(methodOverride('_method'))
// const manyPokemons = [
//     { name: "bulbasaur", image: "http://img.pokemondb.net/artwork/bulbasaur" },
//     { name: "ivysaur", image: "http://img.pokemondb.net/artwork/ivysaur" },
//     { name: "venusaur", image: "http://img.pokemondb.net/artwork/venusaur" },
//     { name: "charmander", image: "http://img.pokemondb.net/artwork/charmander" },
//     { name: "charizard", image: "http://img.pokemondb.net/artwork/charizard" },
//     { name: "squirtle", image: "http://img.pokemondb.net/artwork/squirtle" },
//     { name: "wartortle", image: "http://img.pokemondb.net/artwork/wartortle" }
// ]

app.use((req, res, next) => {
    console.log("I run for all routes")
    next()
})

app.use(express.urlencoded({ extended: false }))
mongoose.set("strictQuery", true)

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('<h4>Welcome to the Pokemon App!</h4>')
})

app.get("/pokemon", (req, res) => {
    Pokemon.find({}, (error, allPokemon) => {
      res.render("Index", {
        allPokemon: allPokemon, // getting all fruis from db to pass as props
      })
    })
  })


// New - Get a form to create a new record
app.get("/pokemon/new", (req, res) => {
    res.render("New")
})


app.post("/pokemon", (req, res) => {
  console.log('hello')
  let pokeBody = req.body
  pokeBody.image = pokeBody.name
    Pokemon.create(pokeBody, (error, createdPokemon) => {
        res.redirect("/pokemon");
    })
})
app.put('/pokemon/:id', (req, res)=>{
  Pokemon.findByIdAndUpdate(req.params.id, req.body, (err, allPokemon)=>{
     console.log(allPokemon)
      res.redirect(`/pokemon/${req.params.id}`) // redirecting to show page 
  })
})


// Pokemon.insertMany(manyPokemons)
//     // if database transaction succeeds
//     .then((pokemons) => {
//         console.log(pokemons)
//     })
//     // if database transaction fails
//     .catch((error) => {
//         console.log(error)
//     })
//     // close db connection either way
//     .finally(() => {
//         db.close()
//     })

app.get('/pokemon/:id/edit', (req, res)=>{
  Pokemon.findById(req.params.id, (err, foundPokemon)=>{ //find the fruit
    if(!err){
      res.render(
        'Edit',
      {
        pokemon: foundPokemon //pass in the found fruit so we can prefill the form
      }
    );
  } else {
    res.send({ msg: err.message })
  }
  })
})


app.get("/pokemon/:id", function (req, res) {
    Pokemon.findById(req.params.id, (err, foundPokemon) => {
      res.render("Show", {
        pokemon: foundPokemon,
      })
    })
  })



app.listen(port, function () {
    console.log('Hello')
})