var Kerp = require("./kerpar.js");

module.exports = class Grass extends Kerp {

    mul() {

        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (exanak != 'cmer') {
            if (this.multiply >= 8 && newCell) {
                var newGrass = new Grass(newCell[0], newCell[1], this.index);
                grassArr.push(newGrass);
                matrix[newCell[1]][newCell[0]] = 1;
                this.multiply = 0;
            }
        }

    }

}