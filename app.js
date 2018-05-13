var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

app.listen(3000, function () {
    console.log("Example is running on port 3000");
});
var xQanak = 50;
var yQanak = 50;
var matrix = [];
var side = 10;
var grassArr = [];
var utich = [];
var gisho = [];
var amen = [];
var hov = [];
