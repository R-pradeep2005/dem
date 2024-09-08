

const express=require('express');
const fs=require('fs')
const app= express();

app.set('view engine' ,'ejs');
app.set('views','./ejs_screens');     
app.get('/',(req,res) => {
 res.render('sign-in')

})
app.get('/sign-up',(req,res)=>{
  res.render('sign-up')
})


app.listen(3000,"0.0.0.0")
