const cities = ['Athens', 'Patras', 'Larissa', 'Volos']

console.log(cities.slice(1, 3));                 //ΤΟ 3 ειναι "ανοικτό" δεν επιλεγεται για εισαγωγη!
console.log(cities.slice(2));                    //Απο το index 2 μλεχρι το τελος τπυ πινακα ολα τα στοιχεια!
console.log(cities.slice(-2));                   //Μετραει απο το τελος του πινακα προς τα εμπρος με αρνητικο αρ!

//============= shallow copy
const copyCities = cities.slice();      // καμία παράμετρο -> ακριβές, νέο αντίγρ. ολόκληρου του πίνακα. (Old way)
const copyCities2 = [...cities];        // Modern way to copy

const orders = [{ total: 10 }, { total: 20 }];
const deepOrdersCopy = structuredClone(orders)