
function setup() {
    socket = io.connect('http://localhost:3000');


var side = 10;


    frameRate(5);
    createCanvas(600, 600);

    socket.on("matrix", gcel);


}





function gcel(matrix) {
  
var side = 10;

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




