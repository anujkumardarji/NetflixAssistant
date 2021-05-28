const express = require('express')
const ejs = require('ejs') 
const netflixController = require('./netflixController')
const app = express()

app.use(express.static(__dirname + '/public')); 
app.set('view engine','ejs')
app.listen(4141)


netflixController(app)