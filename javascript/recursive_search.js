function recursiveSearch(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  if (arr[0] === target) {
    return true;
  }

  return recursiveSearch(arr.slice(1), target);
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// given an array of values, use recursion to find the target value, return true if found, else false.

// Base case: if the array is empty => return false.
// start with the first element
// compare with the target value
// call recursiveSearch function for the rest of the array arr[1:len -1]

// And a written explanation of your solution
