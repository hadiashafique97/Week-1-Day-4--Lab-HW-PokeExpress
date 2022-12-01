const { application } = require('express')
const express = require('express')
const app = express()

const port = 3000


app.get('/',(req, res) =>{
 res.send('<h4>Welcome to the Pokemon App!</h4>')
})






app.listen(3000, function(){
    console.log('Hello')
})