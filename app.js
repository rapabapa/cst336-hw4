const express = require("express");
const app = express();
var faker = require("faker");

app.engine("ejs", require("ejs").renderFile);
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("index.ejs", {"user": faker.name.findName(), "job": faker.name.jobType()});
});


app.get("/grayhat", function(req, res){
  res.render("grayhat.ejs", {"user": faker.name.findName(), "job": faker.internet.email()});
});

app.get("/blackhat", function(req, res){
  res.render("blackhat.ejs", {"user": faker.name.findName(), "job": faker.name.jobType()});
});

app.get("/whitehat", function(req, res){
  res.render("whitehat.ejs", {"user": faker.name.findName(), "job": faker.name.jobType()});
});

//server listener
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Express Server is Running...")
});


