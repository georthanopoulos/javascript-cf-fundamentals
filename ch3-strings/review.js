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
    return reversed === str1.trim().toUpperCase().split(/\s+/).join('')
}



// Άσκηση 3
// Μία συνάρτηση μετράει πόσα φωνήεντα 
// [a, e, i, 0, u] περιεχει ένα string ανεξαρτήτως
// κεφαλαίων / πεζών

function countVowels(str2) {
    const vowels = [...'aei0u']
    let count = 0

    for (const ch of str.toLowerCase()) {
        if (vowels.includes(ch)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Javascript'))

// Άσκηση 4
// Μία συνάρτηση που παίρνει ως είσοδο μία πρόταση
// και να επιστρέφει την ίδια πρόταση αλλά με το 
// πρώτο γράμμα κάθε λέξης κεφαλαίο και τα υπόλοιπα πεζά
// και ένα κενό μεταξύ των λέξεων 
// 'codING faCtory' -> 'Coding Factory'

// 1st way
function capitalizeWords(sentence) {
    return sentence
        .split(' ')                                          // Χωρίζει την πρόταση σε πίνακα λέξεων με βάση το κενό
        .filter(word => word !== '')                                   // Αφαιρεί τυχόν πολλαπλά συνεχόμενα κενά
        .map(word => {                                                 // Παίρνει το 1ο γράμμα και το κάνει κεφαλαίο
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();   // Παίρνει τα υπόλοιπα γράμματα και τα κάνει πεζά
        })
        .join(' ');                                  // Ενώνει τις λέξεις ξανά σε πρόταση με ένα κενό ανάμεσά τους
}

// Παράδειγμα χρήσης:
console.log(capitalizeWords('codING faCtory'));           // Εμφανίζει: 'Coding Factory'



// 2nd way --In Lecture
function capitalize(str) {
    if (!str.trim()) return ''    //must do check! -> "if not string"

    let returnedSentence = '';
    const tokens = str.trim().split(/\s+/)

    for (const token of tokens) {
        const newToken1 = token[0].toUpperCase()
        const newToken2 = token.slice(1).toLowerCase()
        returnedSentence += newToken1 + newToken2 + ' '
    }
    return returnedSentence.trim()
}

console.log(capitalize('codING faCtory'));



// Άσκηση 5 - Interview
// Μία συνάρτηση που παίρνει ένα κείμενο και 
// μία λέξη και επιστρέφει πόσες φορές εμφανίζεται
// αυτή η λέξη μέσα στο κείμενο (ανεξαρτήτων πεζών / κεφαλαίων)

//1st way
function wordCount(text, str) {
    if (!text.trim() || !str.trim()) return 0

    const words = text.trim().toLowerCase().split(/\s+/)
    const searchTerm = str.trim().toLowerCase()
    let times = 0;

    for (const word of words) {
        if (word === searchTerm) times++
    }
    return times;
}

//2nd way --Regular Expression (RegEx)
function wordCount2(text, str) {
    const pattern = new RegExp('\\b + str.trim() + \\b', 'gi')    // \\b => boundaries --gi => Global appearances Incensitive.
    const matches = text.match(pattern);

    return matches === null ? 0 : matches.length;
}


// Άσκηση 6
// Μία συνάρτηση που παίρνει ως είσοδο τον αριθμό κάρτας
// π.χ: '1234 5678 2345 6543' και επιστρέφει masked όλα τα ψηφία εκτός απο τα 4 τελευταία, π.χ: **** **** **** 6543

function maskCardNumber(cardNumber) {
    if (!cardNumber.trim()) return

    const digits = cardNumber.trim().split(' ').join('')
    const lastFourDigits = digits.slice(-4)
    const masked = '*'.repeat(digits.length - 4)

    return masked + lastFourDigits;
}

console.log(maskCardNumber('1234 5678 2345 6543'));