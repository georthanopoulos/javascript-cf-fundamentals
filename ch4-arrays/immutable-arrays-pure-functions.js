const numbers = [1, 2, 3, 4];

// Εισαγωγή ενός στοιχείου
numbers.push(5)
numbers.splice(3, 0, 5)                 // στη θέση 3 δεν διαγράφει τίποτα(0) και προσθέτει το 5.

// Immutable Array
function addToArrayEnd(arr, num) {
    return [...arr, num]                                               // insert --> spread.
}

function addToArrayStart(arr, num) {
    return [num, ...arr]
}

function addToArrayIndex(arr, num, index) {
    return [...arr.slice(0, index), num, ...arr.slice(index)]
}

// Update
numbers.splice(3, 1, 8)                 // in place. Στη θέση 3 διαγράφει ένα στοιχειο(1) και προσθέτει το 8.

// Immutable update
const updateAtArrayIndex = (arr, index, newValue) => {
    arr.map((item, i) => (i === index) ? newValue : item)              // callbacks parameters (Value-Index-Array)
}

// Update ALL arr elements
const updateAll = (arr, newValue) => arr.map(item => newValue)         // map --> update.

// Delete
let index = numbers.indexOf(1)
if (index !== -1) numbers.splice(index, 1)

// Immutable delete
//thuthiness. filter imports in the next array "truth". Αφηνει να περασουν τα truthy! OXI τα falsy!
const deleteFromArray = (aqrr, num) => arr.filter(item => item !== num)    //delete --> filter

const deleteByIndex = (arr, index) =>
    [...arr.slice(0, index), ...arr.slice(index + 1)]                