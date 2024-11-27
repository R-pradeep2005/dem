const express = require('express');
const fs = require('fs');
const path = require('path')
const app = express();

// Middleware hello
app.use(express.static(path.join(__dirname,'public'))) 

app.set('view engine' ,'ejs');
app.set('views','./ejs_screens');

app.get('/', (req, res) => {
 res.render('sign-in')
})

app.get('/sign-up', (req,res) => {
  res.render('sign-up')
})
 
app.get('/home', (req, res) => {
  res.render('main_page')
})

app.get('/story', (req,res) => {
res.render('story')
})

app.post('/home',(req,res)=>{
  res.render('main_page')
})
app.listen(3000,"0.0.0.0")
