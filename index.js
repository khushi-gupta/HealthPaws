const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const logapp=express();
const path=require('path');
app.use('/home',express.static(path.join(__dirname, 'loginpage')));
app.use('/adopt',express.static(path.join(__dirname, 'adoptpage')));
app.use('/',express.static(path.join(__dirname, 'homepage')));
app.use('/form',express.static(path.join(__dirname, 'formpage')));
app.use('/diseases',express.static(path.join(__dirname, 'Diseasess')));
app.use('/product',express.static(path.join(__dirname, 'product')));


app.get('/',function(req,res)
{
  res.sendFile(__dirname+"/loginpage/index.html");
});
app.get('/home',function(req,res)
{
  res.sendFile(__dirname+"/homepage/home.html");
});
app.get('/adopt',function(req,res){
  res.sendFile(__dirname+'/adoptpage/adopt.html');
});
app.get('/form',function(req,res){
  res.sendFile(__dirname+'/formpage/form.html');
})
app.get('/diseases',function(req,res){
  res.sendFile(__dirname+'/Diseasess/diseases.html');
})
app.get('/product',function (req,res) {
  res.sendFile(__dirname+'/product/index.html');
})
app.listen(3000,function () {
  console.log("Server is running");
})
