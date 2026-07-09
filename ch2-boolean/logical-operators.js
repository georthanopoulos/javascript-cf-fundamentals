// Scenario: booleans
const cartTotal = 50;
const isMember = true;

const hasFreeShipping = (cartTotal > 40) && isMember;

console.log(hasFreeShipping);

const hasDiscount = cartTotal > 100 || isMember;

console.log(hasDiscount);

//Τα && και || δεν επιστρέφουν πάντοτε boolean.
//Μπορεί να επιστρέφουν μία από τις τιμές.
const username = '';
const displayName = username || 'Guest'             //expected result = Guest

console.log(displayName);


const user = { name: 'Alice' }                      // within moustache beacuse it is an object
const helloName = user && user.name;                //the first leg is expected to be true. Then, ceck the 
                                                    //second which is Alice. so it is truthy and it returns the right side. if the first leg was null, user would be returned instead.
console.log(helloName);                                                    