import {Grid} from "./Grid";
import {readFileSync} from "fs"
import {join} from "path"
import {Coordinate} from "./Coordinate";
import {Direction, DIRECTION_ORDER} from "./Direction";
import {Command, COMMAND_VALUES} from "./Command";
import {Rover} from "./Rover";

type RoverInstruction = {
    startCoordinate: Coordinate,
    startDirection: Direction,
    commands: Array<Command>
}

const rawInput: string = readFileSync(join(__dirname, 'input.txt')).toString();

const chunk = <T>(arr: Array<T>, chunkSize = 2): Array<Array<T>> => {
    if (chunkSize <= 0) throw "Invalid chunk size";
    const result = [];
    for (var i = 0, len = arr.length; i < len; i += chunkSize)
        result.push(arr.slice(i, i + chunkSize));
    return result;
}

const program = () => {
    const lines = rawInput
        .split('\n')
        //last line empty
        .filter(v => !!v)

    const [gridRawInput, ...rawInputRovers] = lines;
    const [upperRightX, upperRightY] = gridRawInput.split(' ').map((num) => parseInt(num));
    const grid = new Grid(upperRightX, upperRightY)

    const instructions: Array<RoverInstruction> = chunk(rawInputRovers)
        //remove invalid commands
        .filter(v => v.length === 2)
        .map(([rawCoordinates, rawInstructions]): RoverInstruction => {
            const [rawXCoordinate, rawYCoordinate, rawDirection] = rawCoordinates.split(' ');
            const startDirection = DIRECTION_ORDER.find(d => d.startsWith(rawDirection))!
            return {
                startCoordinate: {x: parseInt(rawXCoordinate), y: parseInt(rawYCoordinate)},
                // getting direction by unique start letter
                startDirection,
                // getting command by unique start letter
                commands: rawInstructions.split('')
                    .map(shortCommand => COMMAND_VALUES.find((com) => com.startsWith(shortCommand))!)
            }
        });

    for (const instruction of instructions) {
        const {startCoordinate, startDirection, commands} = instruction;
        const rover = new Rover(startCoordinate, startDirection, grid);

        for (const command of commands) {
            rover.execute(command)
        }
        console.log(rover.getCoordinate());
    }
};

program();
