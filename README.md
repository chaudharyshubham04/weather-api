Nodejs + Express + Open Weather
 
OpenWeatherMap.org account https://openweathermap.org/api
Create an empty directory named weather-app.
Open up your console, navigate to our new directory and run npm init.
Fill out the required information to initialize our project.
Within our weather-app directory, create a file named index.js — this file will house the code for our application.
npm install --save express
install in index.js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('  app listening on port 3000!')
})
Run: node index.js

Now open your browser and visit: http://localhost:3000

Install template system: npm install ejs --save

Edit index.js: app.set('view engine', 'ejs')
 
 