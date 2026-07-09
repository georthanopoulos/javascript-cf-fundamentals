let str = 'Coding Factory';

console.log(str.substring(1, 5));              //startIndex - endIndex - 1 results = odin
console.log(str.slice(1, 5));                  //startIndex - endIndex - 1 results = odin
console.log(str.slice(2));                     // results = ding Factory
console.log(str.slice(-7));                    // results = Factory

// split
let tokens = str.split(' ');
console.log(tokens);