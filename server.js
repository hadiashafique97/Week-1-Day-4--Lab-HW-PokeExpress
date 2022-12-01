
const express = require('express')
const app = express()
var pokemon = require('./models/pokemon')
const port = 3000
app.set('view engine', 'jsx')
app.engine('jsx',require('express-react-views').createEngine())

app.get('/',(req, res) =>{
 res.send('<h4>Welcome to the Pokemon App!</h4>')
})

app.get('/pokemon', (req,res) =>{
    res.render(res.render('Index', {allPokemon:pokemon
        }))//line 4
})

app.get('/pokemon/:id', (req,res)=>{
    res.send(req.params.id)
})

// app.get('/pokemon/:id', function(req, res){
//     res.render('Show', { //second param must be an object
//         pokemon: allPokemon[req.params.indexOfPokemon] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.indexOfFruitsArray]
//     })
// })



app.listen(port, function(){
    console.log('Hello')
})