var Kerp = require("./kerpar.js");

module.exports = class Gisho extends Kerp {

    constructor(x, y, ind) {
        super(x, y, ind);
        this.energy = 5;
        this.y1;
        this.x1;
        this.multiply = 0;
    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }


    move() {
        var emptyCord = this.getDirections(1);

        var g = random(emptyCord);

        if (g) {
            var x = g[0];
            var y = g[1];
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    kerac++;
                }
            }
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
        }
    }

    eat() {
        var uteliq = this.getDirections(2);
        var kerac = random(uteliq);
        if (kerac) {


            var x = kerac[0];
            var y = kerac[1];

            matrix[this.y][this.x] = 0;
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
            for (var i in utich) {
                if (x == utich[i].x && y == utich[i].y) {
                    utich.splice(i, 1);
                }
            }
            this.energy++;
            if (this.energy >= 15) {
                this.mul();
                this.energy = 5;
            }


        }


        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }

    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gisho) {
            if (this.x == gisho[i].x && this.y == gisho[i].y) {
                gisho.splice(i, 1);
                break;
            }
        }


    }

    mul() {
        if (exanak == 'amar') {
            var emptyg1 = this.getDirections(0);

            var g1 = random(emptyg1);
            if (g1) {
                var x = g1[0];
                var y = g1[1];

                var gs = new Gisho(x, y, this.index);
                gisho.push(gs);

                matrix[y][x] = 3;
            }
        }
    }

}


