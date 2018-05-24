var xQanak = 50;
var yQanak = 50;
var matrix = [];
var side = 10;
var grassArr = [];
var utich = [];
var gisho = [];
var amen = [];
var hov = [];
function setup() {
   var socket = io.connect('http://localhost:3000');


    for (var y = 0; y < yQanak; y++) {
        matrix[y] = [];
        for (var x = 0; x < xQanak; x++) {
            matrix[y][x] = Math.round(random(5));

        }
    }


    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);

    background('gray');


}





function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill('#01a3c8');
                rect(x * side, y * side, side, side);
            }

        }
    }
   






}




