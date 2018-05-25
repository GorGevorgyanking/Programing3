var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("Public"));

app.get("/", function (req, res) {
    res.redirect("Public/index.html");
});

server.listen(3000, function () {
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


        for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ut = new Utox(x, y, 2);
                utich.push(ut);
            }
            else if (matrix[y][x] == 3) {
                var gs = new Gisho(x, y, 3);
                gisho.push(gs);
            }
            else if (matrix[y][x] == 4) {
                var am = new Amen(x, y, 4);
                amen.push(am);
            }
            else if (matrix[y][x] == 5) {
                var hovo = new Hov(x, y, 5);
                hov.push(hovo);
            }

        }
    }
     for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in utich) {
        utich[i].eat();
    }
    for (var i in gisho) {
        gisho[i].eat();
    }
    for (var i in amen) {
        amen[i].eat();
    }
    for (var i in hov) {
        hov[i].eat();
    }//setIntervan
    
    
    global.random = function(arr){
var random = Math.floor(Math.random() * arr.length);
return arr[random];
    }

    for (var y = 0; y < yQanak; y++) {
        matrix[y] = [];
        for (var x = 0; x < xQanak; x++) {
            matrix[y][x] = Math.round(random(5));

        }
    }