
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





app.listen(port, function(){
    console.log('Hello')
})