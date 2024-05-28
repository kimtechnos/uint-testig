import add from "./add.js";
test ("add two numbers correctly", ()=>{
 expect(add(5,4)).toBe(9);
 expect(add (5,8)).toBe(13);
});

