var names = [
	"name:",
	"number:"
	"email:",
	"id:"
	];
var waitlist = [];

var express = require ('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
 res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
 res.sendFile(path.join(__dirname, "/tables.html"));
});

app.get("/reserve", function(req, res) {
 res.sendFile(path.join(__dirname, "/reserve.html"));
});


app.listen(PORT, function(){
  console.log("App listening on PORT" + 8080)
})


app.post("/api/tables", function(req, res) {
  console.log(req.body)
  });


app.post("/api/new", function(req, res) {
  var waitlist = req.body;
  waitlist.routeName = waitlist.name.replace(/\s+/g, "").toLowerCase();

  console.log(waitlist);

  names.push(waitlist);

  res.json(waitlist);
})