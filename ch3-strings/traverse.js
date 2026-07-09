const coding = 'Coding';

for (let i = 0; i < coding.length; i++) {
    console.log(coding[i] + " ");
}

for (const char of coding) {                      //το char προχωραει στο επόμενο και στο επόμενο στοιχείο 
    //δείχνωντας το, σαν δείκτης. Δεν τον κανει reassign! αλλα ετσι και αλλιως ειναι string και ειναι immutable.
    console.log(char)
}