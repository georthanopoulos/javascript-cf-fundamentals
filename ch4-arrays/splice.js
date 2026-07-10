const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//Remove - Delete
const removedSplice = arr.splice(0, 4);     //results -> [1, 2, 3, 4]  Splice affects the arr (mutable). 
// 1st el. (0) -> startIndex. 2nd el (4) -> numberof el to slice out.
console.log(arr);                           // due to the splice performed above the result is [5, 6, 7, 8],
console.log(removedSplice);                 //it reacts as mutable. That's why 1st cons.log = [5,6,7,8]


//Insert
arr.splice(0, 0, 10);                   //after the 2nd el. a 3rd value can be used as insert value into the array
console.log(arr);


//Update
arr.splice(0, 1, 11);
console.log(arr);