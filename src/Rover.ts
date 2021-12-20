import {Direction, DIRECTION_ORDER} from "./Direction";
import {Coordinate} from "./Coordinate";
import {Grid} from "./Grid";
import {Command} from "./Command";


export class Rover {

    constructor(private coordinate: Coordinate, private direction: Direction, private grid: Grid) {
    }

    execute = (command: Command) => {
        const commandFnMap: Record<Command, () => void> = {
            LEFT: this.turnLeft,
            RIGHT: this.turnRight,
            MOVE_FORWARD: this.moveForward
        }
        commandFnMap[command]()
    }

    moveForward = (): void => {
        const forwardFnMap: Record<Direction, () => Coordinate> = {
            NORTH: () => ({x: this.coordinate.x, y: this.coordinate.y + 1}),
            EAST: () => ({x: this.coordinate.x + 1, y: this.coordinate.y}),
            SOUTH: () => ({x: this.coordinate.x, y: this.coordinate.y - 1}),
            WEST: () => ({x: this.coordinate.x - 1, y: this.coordinate.y}),
        }
        const newCoordinate = forwardFnMap[this.direction]();
        if (this.grid.isInGrid(newCoordinate)) {
            this.coordinate = newCoordinate
        } else {
            //do nothing hit grid edge
        }
    }

    turnRight = () => {
        // calculate new direction
        const directionIndex = (DIRECTION_ORDER.indexOf(this.direction) + 1)
        const index = (DIRECTION_ORDER.length + directionIndex) % DIRECTION_ORDER.length
        this.direction = DIRECTION_ORDER[index]
    }

    turnLeft = () => {
        // calculate new direction
        const directionIndex = DIRECTION_ORDER.indexOf(this.direction) - 1
        const index = (DIRECTION_ORDER.length + directionIndex) % DIRECTION_ORDER.length
        this.direction = DIRECTION_ORDER[index]

    }

    public getCoordinate() {
        return `${this.coordinate.x} ${this.coordinate.y} ${this.direction.substr(0, 1)}`;
    }
}