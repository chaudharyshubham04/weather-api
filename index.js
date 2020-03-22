const express=require("express");
const bodyParser=require("body-parser");
const request = require('request');
const app=express();
const apiKey=require("./models/key");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
 

 

app.get("/",function(req,res){
	res.render("welcome")
});
 
app.get("/weather",function(req,res){
	res.render("entry");
});

app.post("/weather",function(req,res){
	var city=req.body.city;

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
     let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('error', { error: 'Error, please try again.'});
      }else{
     res.render("show",{weather:weather.main.temp , name:weather.name,humidity:weather.main.humidity})
     // let message = `It's ${weather.main.temp} degree Celsius in ${weather.name}!`;
     // res.write(message);
     // res.write("\nWelcome to the weather app. Made by Shubham Chaudhary.\n");
     // res.send();
           }
      }
});

});

app.listen(process.env.PORT || 3000,()=>{
	console.log("listening on port 3000");
})