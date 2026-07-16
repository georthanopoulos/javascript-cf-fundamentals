// Άσκηση 1
// Μία συνάρτηση που παίρνει ως παράμετρο ένα string
// και επιστρέφει ένα νέο string με τους χαρακτηρες
// σε αντίστροφη σειρά.


// 1st way --classic iterative way 
function reverse(str) {
    let returnedStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        returnedStr += str[i]
    }

    return returnedStr;
}


// 2nd way --modern Functional Programming. This way shows that you know Javascript!!!
function reverse2(str) {
    return str.trim().split('').reverse().join('');  // Always use trim on Enterprice level for safety and clarity
}

let str = "Coding";
console.log(reverse2(str));


// Άσκηση 2
// Μια συνάρτηση που ελέγχει αν ένα string
// είναι παλίνδρομο. Αγνοώντας πεζ/κεφαλαία.
// Επιστρέφει boolean.

// 1st --preferred way
function palindrome(str1) {

    const cleaned = str1.trim().toUpperCase().split(/\s+/).join('')

    for (let i = 0, j = cleaned.length - 1; i < j; i++, j++) {
        if (cleaned[i] !== cleaned[j]) {
            return false;
        }
    }

    return true;
}

// 2nd way --classic
function palindrome2(str1) {
    const reversed = str1.trim().toUpperCase().split(/\s+/).reverse().join('')
    return reversed === str1.trim().toUpperCase().split().join('')
}