// Ex1.1 --- Δηλώστε μία μεταβλητή ‘name‘ τύπου stringκαι ορίστε το όνομά σας σε αυτή. Εκτυπώστε ένα μήνυμα χρησιμοποιώντας συνένωση όπως “Hello, [όνομα]!“

const firstname = 'George'
const lastname = 'Th.'

//1st --modern wat with string interpolation
const greeting = `Hello, ${firstname} ${lastname}`
console.log(greeting)

// 2nd --classic way 
const greeting2 = "Hello, " + firstname + " " + lastname;
console.log(greeting2)


// Ex1.2 --- Δηλώστε δύο μεταβλητές num1 και num2 με αριθμητικές τιμές. Υπολογίστε το άθροισμά τους και εκτυπώστε το αποτέλεσμα

const num1 = 70;
const num2 = 50;

// 1st way -- classic
const sum = num1 + num2;
console.log(sum);

// 2nd way -- modern with function
function sum2(a, b) {
    return a + b
}
console.log(sum2(num1, num2));


// Ex1.3 --- Δηλώστε μια μεταβλητή isTrue με τιμή boolean. Εκτύπωση μηνύματος: "Είναι αλήθεια!" αν η isTrue είναι true και "Είναι ψευδές!" σε διαφορετική περίπτωση.Με τριαδικό τελεστή

let isTrue = true;
const message = isTrue ? "Είναι αλήθεια" : "Είναι ψευδές"
console.log(message);


// Ex2.1 --- Δημιουργήστε έναν πίνακα που ονομάζεται cities με τις τιμές "Athens", "London", "Paris". Προσθέστε "Berlin" στο τέλος του πίνακα. Διασχίστε τον πίνακα και εκτυπώστε κάθε πόλη

const cities = ["Athens", "London", "Paris"]
cities.push("Berlin")

for (const city of cities) {
    console.log(city)
}

// Ex2.2 --- Δημιουργήστε ένα objectuser με ιδιότητες, name,age,city. Εκτυπώστε ένα μήνυμα χρησιμοποιώντας αυτές τις ιδιότητες.Προσθέστε μια μέθοδο hello() που εκτυπώνει έναν χαιρετισμό χρησιμοποιώντας το name. Καλέστε τη μέθοδο hello()

// 1st way -- classic
const objectuser = {
    name: 'Derek', age: 32, city: 'Gdansk', hello: function hello() {
        console.log(`Hello my dear friend, ${this.name}`);
    }
};

objectuser.hello()


// 2nd way -- modern
const objectuser2 = {
    name: 'Derek', age: 32, city: 'Gdansk', hello() {
        console.log(`Hello my dear friend, ${this.name}`);
    }
};

objectuser2.hello()


// Ex2.3 --- Γράψτε μια συνάρτηση υπολογισμού του εμβαδόν ενός κύκλου που να παίρνει την ακτίνα ενός κύκλου ως παράμετρο και να επιστρέφει το εμβαδόν(πr2). Καλέστε τη συνάρτηση με ακτίνα 5

function circleAreaCalculator(radius) {
    const area = Math.PI * radius * radius;
    return area.toFixed(2);
}

console.log(circleAreaCalculator(5));

