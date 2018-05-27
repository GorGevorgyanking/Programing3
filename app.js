var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs =require('fs');
app.set('port', process.env.PORT || 3000);
app.use(express.static("Public"));

app.get("/", function (req, res) {
    res.redirect("Public/index.html");
});

server.listen(app.get('port'), function () {
    console.log("Example is running on port 3000");
});
var Grass = require("./grass.js");
var Utox = require("./utich.js");
var Gisho = require("./gisho.js");
var Amen = require("./amen.js");
var Hov = require("./hoviv.js");
var Kerp = require("./kerpar.js");
xQanak = 50;
yQanak = 50;
matrix = [];
side = 10;
grassArr = [];
utich = [];
gisho = [];
amen = [];
hov = [];
exanak = 'amar';

var obj = {
    'hangucial': [],
    'sovac': []
}

takt = 0;
merac = 0;
kerac = 0;



for (var y = 0; y < yQanak; y++) {
    matrix[y] = [];
    for (var x = 0; x < xQanak; x++) {
        matrix[y][x] = Math.round(Math.random() * 5);

    }
}

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

fs.writeFile("static.json", merac);
if (takt % 2 == 0) {
    fs.writeFile("static.json", merac);
    obj.hangucial.push(merac);

    fs.writeFile("kerac.json", kerac);
    obj.sovac.push(kerac);
}
io.on('conncection', function (socket) {
});
setInterval(xv, 2000);
takt++;


function xv() {

    if (takt % 20 == 0) {
        exanak = 'cmer';
        console.log('cmer');
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
    }

    io.sockets.emit('matrix', matrix)
}
global.random = function (arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
}


