/**
 * Implement the solution in this function
 *
 * @param {number} n Output goes from 1 to n
 * @returns {(number|string)[]} An array containing all numbers and strings
 */
function fizzbuzz (n) {
    function isFizzOrBuzz(n) {
        if(n % 3 === 0 && n % 5 === 0) {
            return 'FizzBuzz';
        } else if(n % 3 === 0) {
            return 'Fizz';
        } else if(n % 5 === 0) {
            return 'Buzz';
        } else {
            return n;
        }
    }

    let myArray = [];
    for (let i = 1; i < n + 1; i++) {
        myArray.push(isFizzOrBuzz(i));
    }
    console.log(myArray);
}

fizzbuzz(15);
fizzbuzz(50);
fizzbuzz(100);