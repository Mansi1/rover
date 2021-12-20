import {Grid} from "./Grid";

describe("Test grid", () => {
    it("defaults", () => {
    const grid = new Grid(10,20)
        expect(grid.upperRightX).toBe(10);
        expect(grid.upperRightY).toBe(20);
        
        expect(grid.lowerLeftX).toBe(0);
        expect(grid.lowerLeftY).toBe(0);
    });
    
    it("members", () => {
        const grid = new Grid(1,2,3,4)
        expect(grid.upperRightX).toBe(1);
        expect(grid.upperRightY).toBe(2);

        expect(grid.lowerLeftX).toBe(3);
        expect(grid.lowerLeftY).toBe(4);
    });
    
    it("isInGrid", () => {
        const grid = new Grid(10,20, -10, -20)
        expect(grid.isInGrid({x:0, y: 0})).toBe(true);
        expect(grid.isInGrid({x:10, y: 20})).toBe(true);
        expect(grid.isInGrid({x:-10, y: -20})).toBe(true);

        expect(grid.isInGrid({x:11, y: 20})).toBe(false);
        expect(grid.isInGrid({x:-11, y: -20})).toBe(false);
        expect(grid.isInGrid({x:10, y: 21})).toBe(false);
        expect(grid.isInGrid({x:-10, y: -21})).toBe(false);
    });
});
