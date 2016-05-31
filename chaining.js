var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

var sortedIntegers = integers.sort(function(first, second) {
  return second - first;
});

console.log("descend", sortedIntegers);

function filterInt(numbers) { /* (numbers) on this line has to be the same variable as the one on line number 10 for this function to work*/
  if(numbers < 19) {
    return integers;
  }
}

var filteredIntegers = integers.filter(filterInt);

console.log(filteredIntegers);

var multSub = filteredIntegers.map(function(num) {
  return num * 1.5 - 1;
})

console.log("* 1.5 - 1", multSub);

