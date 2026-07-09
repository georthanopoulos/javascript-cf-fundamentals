let dice;
let times = 0;

do {                                                                //floor = αποκοπή δεκαδικών ψηφίων.
    dice = Math.floor(Math.random() * 6) + 1                       // (max - min + 1)  gia 1 - 6
    times++;
    console.log(`Try ${times}: dice ${dice}`)
} while (dice !== 6)                                            //odo einai diaforo toy 6. oso den einai 6!

console.log(`it took ${times} to get 6.`)