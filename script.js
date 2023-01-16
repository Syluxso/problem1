/**
 * Implement the solution in this function
 *
 * @param {number} n Output goes from 1 to n
 * @returns {(number|string)[]} An array containing all numbers and strings
 */
function fizzbuzz (n) {
    let myArray = [];
    for (let i = 0; i < n + 1; i++) {
      myArray.push(isBizzOrBuzz(i));
    }
    console.log(myArray);
}

function isFizzOrBuzz(n) {
    if(n % 3 === 0 && n % 5 === 0) {
        return 'fizzbuzz';
    } else if(n % 3 === 0) {
        return 'fizz';
    } else if(n % 5 === 0) {
        return 'buzz';
    } else {
        return n;
    }
}

fizzbuzz(15);
fizzbuzz(50);
fizzbuzz(100);
