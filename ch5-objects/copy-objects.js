const initial = {
    firstname: "Alice",
    age: 30,
    address: { street: "Patission", streetNum: 80 }
}

const copyObj = initial
copyObj.firstname = 'Bob'
console.log(initial.firstname)


const copyInitial = { ...initial }                                     //Shalow Copy
copyInitial.firstname = 'Bob'
copyInitial.address.street = 'Aristotelous'

console.log(initial.firstname)
console.log(initial.address.street)

const copyInitial2 = JSON.parse(JSON.stringify(initial))              // Deep copy --old way

const copyInitial3 = structuredClone(initial)                         // Deep copy --modern way