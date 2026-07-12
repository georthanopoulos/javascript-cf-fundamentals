let str = 'Coding Factory';

console.log(str.substring(1, 5));           //startIndex - endIndex - 1 results = odin => το 5 ανοικτό! not shown!
console.log(str.slice(1, 5));               //startIndex - endIndex - 1 results = odin => το 5 ανοικτό! not shown!
console.log(str.slice(2));                  // results = ding Factory

// results = Factory  ξεκινάει να μετράει τους χαρακτήρες από το τέλος του κειμένου προς τα αριστερά, ξεκινώντας από το -1.
console.log(str.slice(-7));

// split
let tokens = str.split(' ');
console.log(tokens);