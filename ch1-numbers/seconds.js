// Μετατροπή δευτερολέπτων σε λεπτά και δευτερόλεπτα
const totalSeconds = 75;
const SECONDS_PER_MINUTE = 60;

const minutes = Math.floor(totalSeconds / SECONDS_PER_MINUTE);   //Math.floor για να παρουμε μονο το ακεραιο μερος
const seconds = totalSeconds % SECONDS_PER_MINUTE;              //Modulo για να παρουμε το δεκαδικό

console.log(`${totalSeconds} seconds = ${minutes} min and ${seconds} sec`);