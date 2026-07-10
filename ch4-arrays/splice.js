const arr = [1, 2, 3, 4, 5, 6, 7, 8];

//Remove - Delete
const removedSplice = arr.splice(0, 4);    //results -> [1, 2, 3, 4]  Splice affects the arr (mutable). 
                                           // 1st el. (0) -> startIndex. 2nd el (4) -> numberof el to slice out.
console.log(arr);                          // because of splice p[erformed above the result is [5, 6, 7, 8]
console.log(removedSplice);


//Insert
arr.splice(0, 0, 10);
console.log(arr);


//Update
arr.splice(0, 1, 11);
console.log(arr);