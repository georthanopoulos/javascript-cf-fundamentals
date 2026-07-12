const coordinates = [38.98, 23.33];

const [lat, long] = [38.98, 23.33];  // Array destructuring! It is not Array! It is syntax!(the left side)

console.log(lat)                                         // The right side IS an Array!
console.log(long)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, ...others] = numbers;                      // rest pattern - collect remaining

console.log(others);


//swap
let a = 10;
let b = 20;

//destructure! Left[] = syntax NOT Array and Right[] = Array. Πρώτα εκτελείται το δεξιο μερος. Φτιάχνει ένα προσωρινό πίνακα. Μετά γίνεται destructure και δεν χρειάζεται  LET 'η const γιατί εχουν δηλωθεί παραπάνω! 
[a, b] = [b, a];

console.log('a=' + a)
console.log('b=' + b)