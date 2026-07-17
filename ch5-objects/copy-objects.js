const initial = {
    firstname: "Alice",
    age: 30,
    address: { street: "Patission", streetNum: 80 }
}

const copyInitial = { ...initial }                              //Shalow Copy

const copyInitial2 = JSON.parse(JSON.stringify(initial))              // Deep copy --old way

const copyInitial3 = structuredClone(initial)                   // Deep copy --modern way