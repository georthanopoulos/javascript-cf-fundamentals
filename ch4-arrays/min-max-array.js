const ages = [20, 30, 50, 18, 34];

function getMin(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return;     //είναι πράγματι πίνακας και αν έχει στοιχεία

    //(spread operator) "ξεδιπλώνει" τον πίνακα arr σε ξεχωριστούς αριθμούς ...arr, γιατί η Math.min() δεν μπορεί να διαβάσει απευθείας πίνακες.
    let minVal = Math.min(...arr);
    let minPosition = arr.indexOf(minVal);
    return [minVal, minPosition + 1];
};

function getMin2(...arr) {
    if (!Array.isArray(arr) || arr.length === 0) return;    //είναι πράγματι πίνακας και αν έχει στοιχεία

    //(spread operator) "ξεδιπλώνει" τον πίνακα arr σε ξεχωριστούς αριθμούς ...arr, γιατί η Math.min() δεν μπορεί να διαβάσει απευθείας πίνακες.
    let minVal = Math.min(...arr);
    let minPosition = arr.indexOf(minVal);
    return [minVal, minPosition + 1];
};

console.log(getMin(ages));
console.log(getMin2(20, 30, 50, 14));