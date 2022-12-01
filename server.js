
const express = require('express')
const app = express()
var pokemon = require('./models/pokemon')
const port = 3000


app.get('/',(req, res) =>{
 res.send('<h4>Welcome to the Pokemon App!</h4>')
})

app.get('/pokemon', (req,res) =>{
    res.send(pokemon)
})





app.listen(port, function(){
    console.log('Hello')
})