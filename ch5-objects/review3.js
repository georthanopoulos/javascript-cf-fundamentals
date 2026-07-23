const user = {
    id: 1,
    firstname: 'Alice',
    lastname: 'Welson'
}


// Άσκηση 1a
// Μία συνάρτηση getPropertyValue(obj, propertyName)
// που να επιστρέφει την τιμή της ιδιότητας με αυτό
// το όνομα.

function getPropertyValue(obj, propertyName) {
    // return obj.propertyName  => Θα ήταν ΛΑΘΟΣ. Μέσα στο obj δεν υπάρχει "propertyName" 
    return obj[propertyName]
}

console.log(getPropertyValue(user, "id"))



// Άσκηση 1b
// Μία συνάρτηση getPropertyValue(obj, propertyName)
// που επιστρέφει την τιμή της ιδιότητας με αυτό
// το όνομα και λαμβάνει υπόψη την περίπτωση το obj
// να είναι null/undefined.

function getPropertyValue(obj, propertyName) {
    // return obj.propertyName         => ΛΑΘΟΣ, μέσα στο obj δεν υπάρχει "propertyName"
    return obj?.[propertyName]        // optional chaining
}

console.log(getPropertyValue(null, "id"))

// Άσκηση 1c
// Μία συνάρτηση getPropertyValue(obj, propertyName) 
// που επιστρέφει την τιμή της ιδιότητας με αυτό
// το όνομα και λαμβάνει υπόψη την περίπτωση το obj
// να είναι null/undefined ή και το propertyName να μην
// υπάρχει

function getProperty(obj, propertyName) {
    if (obj == null || obj == undefined) {
        return undefined
    }

    return Object.hasOwn(obj, propertyName)
        ? obj[propertyName]
        : undefined
}



// Άσκηση 2
// Μία συνάρτηση που αθροίζει τις τιμές των
// ιδιοτήτων ενός object
// { jan: 100, feb: 300}

//1st way
function sumValues(obj) {
    let sum = 0

    for (const value of Object.values(obj)) {
        sum += value
    }

    return sum
}

//2nd way
function sumValues2(obj) {
    return Object.values(obj).reduce((sum, value) => sum + values, 0)
}


// Άσκηση 3
// Μία συνάρτηση που να εκτυπώνει τα key, value
// ενός obj.

//1st way
function printEntries(obj) {
    for (const [key, value] of Object.entries(obj)) {
        console.log(key + ": " + value)
    }
}

//2nd way
function printEntries2(obj) {
    Object.entries(obj).forEach(([key, value]) => console.log(key + ":" + value))
}



// Άσκηση 4
// Έστω το παρακάτω bankAccount obj.
// Προσθέστε μεθόδους: deposit και withdraw.

const bankAccount = {
    owner: "Alice",
    balance: 500,
    deposit(amount) {
        if (amount < 0) return
        this.balance += amount
    },

    withdraw(amount) {
        if (amount > this.balance) return
        this.balance -= amount
    },
}



// Άσκηση 5
// Μία συνάρτηση που να επιστρέφει το product
// με το max price

const products = [
    { name: 'mouse', price: 50 },
    { name: 'keyboard', price: 80 },
    { name: 'cpu', price: 800 },
]

function findMostExpensive(products) {
    if (!Array.isArray(products)) return
    if (products.length === 0) return

    let mostExpensive = products[0]

    for (const product of products) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product
        }
    }

    return mostExpensive
}



// Άσκηση 6
// Έστω μία συνάρτηση που να επιστρέφει object
// με γκρουπάρισμα ανά city των users

const users = [
    { firstname: 'Alice', city: 'Athens' },
    { firstname: 'Bob', city: 'Patra' },
    { firstname: 'Costas', city: 'Athens' },
    { firstname: 'Dimitris', city: 'Patra' },
    { firstname: 'Elon', city: 'Athens' },
    { firstname: 'Frank', city: 'Patra' },
]

// { Athens: ['Alice', 'Costas', 'Elon'], Patra: ['Bob', 'Dimitris', 'Frank']  }

function groupByCity(users) {
    const groups = {}

    for (const user of users) {
        if (!(user.city in groups)) {
            groups[user.city] = []
        }
        groups[user.city].push(user.firstname)
    }

    return groups
}
