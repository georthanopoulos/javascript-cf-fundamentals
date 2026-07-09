let str = 'Coding Factory';

//charAt
console.log(str.charAt(1));           // result = o
console.log(str.charAt(100));         // result = ' '
console.log(str[100]);                // result = charAt

// index of  -- better to use indexer instead of charAt if we can. the indexer is used for read/wright.
console.log(str.indexOf('o'));        //result = 1
console.log(str.lastIndexOf('o'));    //result = 11