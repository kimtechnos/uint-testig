import fizzbuzz from "./fizzbuzz.js";
for (let i=1 ; i<=100; i++){
    if ( fizzbuzz(i)!= "fizz" && fizzbuzz (i)!= "buzz" && fizzbuzz(i)!= "fizzbuzz")
        console.log (i)
    else{
        console.log(`${i} ${fizzbuzz(i)}`)
    }
}