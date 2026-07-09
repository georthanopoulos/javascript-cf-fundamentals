const coordinates = [38.98, 23.33];

const [lat, long] = [38.98, 23.33];  // Array destructuring! It is not Array! It is syntax!(the right side)
// The left side IS Array!
console.log(lat)
console.log(long)


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [first, ...others] = numbers;        // rest pattern - collect remaining

console.log(others);


//swap
let a = 10;
let b = 20;

//destructure! Left = Array and Right = syntax. πρωτα εκτελειται το δεξιο μερος. φτιαχνει ενα προσωρινο πινακα. Μετα γινεται destructure και δεν χρειαζεται  LET 'η const γιατι εχουν δηλωθει παραπανω! 
[a, b] = [b, a];

console.log('a=' + a)
console.log('b=' + b)