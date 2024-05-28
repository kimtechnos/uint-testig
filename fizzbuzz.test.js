

import fizzbuzz from "./fizzbuzz.js";
describe("fizzbuzz", ()=>{
    test("it returns the string 'fizz' if the number is divisible by 3", ()=>{
        expect(fizzbuzz(6)).toBe ("fizz")
    })
    test("it returns the string 'buzz' if the number is divisimble by 5" ,()=>{
        expect(fizzbuzz(10)).toBe("buzz")
    })
    test("it returns the sting 'fuzzbuzz' if the number is divisimble by both 3 and 5 ",()=>{
        expect(fizzbuzz(15)).toBe("fizzbuzz")
    })
    test("it returns the number itsef if the number is not divisimble by 3 and 5 ", ()=>{
        expect(fizzbuzz(7)).toBe(7)
    })
})