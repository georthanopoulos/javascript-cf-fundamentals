// Άσκηση 1
// Μία συνάρτηση που να παίρνει ένα πίνακα
// αριθμών και να επιστρέφει το μεγαλύτερο
// αριθμό, χωρίς την Math.max

function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return
    }

    let max = -Infinity;
    for (const element of arr) {
        if (element > max) {
            max = element
        }
    }

    return max;
}

console.log(findMax([1, 202, 3, 4, 50, 6, 70006, 1108]));


// Άσκηση 2
// Μία συνάρτηση που λαμβάνει ώς είσοδο
// ένα πίνακα αριθμών και επιστρέφει τον 
// μέσο όρο

// 1st way
function findAvg(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return
    }

    let sum = 0;
    for (const num of arr) {
        sum += num;
    }

    return sum / arr.length;
}

//2nd way
function findAvg2(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return
    }

    return arr.reduce((total, num) => total + num, 0) / arr.length;
    //accumulator = total and num = number and 0 = starting value.
}


// Άσκηση 3
// Μία συνάρτηση που ελέγχει ( επιστρέφει  true/false)
// αν δύο πίνακες είναι ίσοι¨ίδιο μήκος και ίδια στοιχεία

function equalArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || arr1.length === 0) {
        return false
    }

    if (!Array.isArray(arr2) || arr2.length === 0) {
        return false
    }

    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {       //let instead of const because the i keeps changing (for-loop) 
        if (arr1[i] !== arr2[i]) return false
    }

    return true
}

console.log(equalArrays([1, 2, 3, 3], [1, 2, 3, 4]));


// Άσκηση 4
// Μία συνάρτηση που λαμβάνει ως είσοδο 
// ένα πίνακα και μία τιμή και επιστρέφει
// ένα νέο πίνακα (ο αρχικός δεν αλλάζει)
// χωρίς να εμφανίζει την τιμή αυτή

function removeAllOccurances(arr, valueToRemove) {
    return arr.filter(value => value !== valueToRemove)
}