const cities = ['Paris', 'London', 'Berlin', 'Athens'];
const numbers = [10, 101, 103, 77, 99, 690, 590];

//Best practise - IT IS BEST TO ALSO HAVE A COMPARATOR INCLUDED FOR ACCURACY. See below!
cities.sort((a, b) => a.localeCompare(b, 'el-GR'));              //sorts in-place

numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
});

numbers.sort((a, b) => a - b);               //Ascending
numbers.sort(function (a, b) {
    return a - b;
});

numbers.sort((a, b) => b - a);               //Descending