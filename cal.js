const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {
  res.sendFile(__dirname +"/index.html");
});

app.post("/bmicalculator",function(req,res) {
  var Weight = parseFloat(req.body.w);
  var Height = parseFloat(req.body.h);
  var bmi = Weight / (Height+Height);
  res.send("Your BMI is : " + bmi);
});

app.listen(3000,function() {
  console.log("server in running at 3000");
});
