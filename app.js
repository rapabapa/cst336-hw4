const express = require("express");
const app = express();
var faker = require("faker");

app.engine("ejs", require("ejs").renderFile);
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("index.ejs", {"user": faker.name.findName(), "job": faker.name.jobType()});
});


app.get("/about", function(req, res){
  res.render("about.ejs", {"user": faker.name.findName(), "job": faker.name.jobType()});
});

app.get("/contact", function(req, res){
  res.render("contact.ejs", {"user": faker.name.findName(), "job": faker.name.jobType()});
});

//server listener
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Express Server is Running...")
});


