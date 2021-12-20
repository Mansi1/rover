import {Grid} from "./Grid";
import {Rover} from "./Rover";

describe("Test rover", () => {
    const grid = new Grid(5, 5, -5, -5)
    it("rover turn right command", () => {
        const rover = new Rover({x: 1, y: 1}, "NORTH", grid);
        rover.execute('RIGHT')
        expect(rover.getCoordinate()).toBe("1 1 E");
        rover.execute('RIGHT')
        expect(rover.getCoordinate()).toBe("1 1 S");
        rover.execute('RIGHT')
        expect(rover.getCoordinate()).toBe("1 1 W");
        rover.execute('RIGHT')
        expect(rover.getCoordinate()).toBe("1 1 N");
        rover.turnRight();
        expect(rover.getCoordinate()).toBe("1 1 E");
    });

    it("rover turn left command", () => {
        const rover = new Rover({x: 1, y: 1}, "NORTH", grid);
        rover.execute('LEFT')
        expect(rover.getCoordinate()).toBe("1 1 W");
        rover.execute('LEFT')
        expect(rover.getCoordinate()).toBe("1 1 S");
        rover.execute('LEFT')
        expect(rover.getCoordinate()).toBe("1 1 E");
        rover.execute('LEFT')
        expect(rover.getCoordinate()).toBe("1 1 N");
        rover.turnLeft();
        expect(rover.getCoordinate()).toBe("1 1 W");
    });

    it("rover move forward in nord direction", () => {
            const rover = new Rover({x: 0, y: 0}, "NORTH", grid);
            expect(rover.getCoordinate()).toBe("0 0 N");
            rover.execute('MOVE_FORWARD')
            expect(rover.getCoordinate()).toBe("0 1 N");
        }
    )  
    
    it("rover move forward in east direction", () => {
            const rover = new Rover({x: 0, y: 0}, "EAST", grid);
            expect(rover.getCoordinate()).toBe("0 0 E");
            rover.execute('MOVE_FORWARD')
            expect(rover.getCoordinate()).toBe("1 0 E");
        }
    )
    
    it("rover move forward in nord direction", () => {
            const rover = new Rover({x: 0, y: 0}, "SOUTH", grid);
            expect(rover.getCoordinate()).toBe("0 0 S");
            rover.execute('MOVE_FORWARD')
            expect(rover.getCoordinate()).toBe("0 -1 S");
        }
    )
    
    it("rover move forward in west direction", () => {
            const rover = new Rover({x: 0, y: 0}, "WEST", grid);
            expect(rover.getCoordinate()).toBe("0 0 W");
            rover.execute('MOVE_FORWARD')
            expect(rover.getCoordinate()).toBe("-1 0 W");
        }
    )

    it("rover move outside", () => {
            const rover = new Rover({x: 0, y: 0}, "NORTH", new Grid(1,1,-1,-1));
            expect(rover.getCoordinate()).toBe("0 0 N");
            rover.execute('MOVE_FORWARD')
            expect(rover.getCoordinate()).toBe("0 1 N");
            rover.execute('MOVE_FORWARD')
            expect(rover.getCoordinate()).toBe("0 1 N");
        }
    )
});
