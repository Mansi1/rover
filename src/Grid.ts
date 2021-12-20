import {Coordinate} from "./Coordinate";

export class Grid {

    constructor(public upperRightX: number, public upperRightY: number, public lowerLeftX = 0, public lowerLeftY = 0) {
    }

    public isInGrid(coordinate: Coordinate): boolean {
        // check y coordinate
        return coordinate.y <= this.upperRightY && coordinate.y >= this.lowerLeftY
            // check x coordinate
            && coordinate.x <= this.upperRightX && coordinate.x >= this.lowerLeftX
    }

}