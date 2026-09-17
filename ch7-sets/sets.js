let bag = new Set()

bag.add('Java')
bag.add('Javascript')
bag.delete('Java')

if (bag.has('Javascript'))
    console.log('Has Javascript!')

function addToSet(set, ...values) {            // Rest operator -- technically is an array το values
    values.forEach(value => set.add(value))    // converting array into set
}

function createSet(...elements) {
    return new Set(elements)
}

const cities = [
    { id: 1, city: 'Athens' },
    { id: 2, city: 'Athens' },
]

function getUniqueCities(arr) {
    return [...new Set(arr.map((cityObj) => cityObj.city))];
}

