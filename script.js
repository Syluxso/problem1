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

function isBizzOrBuzz(n) {
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


// Step 1: loop through n numbers.
// Step 2: doing step one, but in an array instead.
// Step 3: we check if a int is divisible by 3 (and print the output)
// Step 4: check if it is both, just one, just the other, or neither. Return the keyword's, or just the number. BAM!


fizzbuzz(15);
fizzbuzz(50);
fizzbuzz(100);
