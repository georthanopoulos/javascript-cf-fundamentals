const initial = [1, 2, 3]                //always are shallow copies
const copy = [...initial]                //spreading => ...

const extended = [0, ...initial, 4]
const chars = [..."Hello"]

console.log(copy)
console.log(extended)
console.log(chars)