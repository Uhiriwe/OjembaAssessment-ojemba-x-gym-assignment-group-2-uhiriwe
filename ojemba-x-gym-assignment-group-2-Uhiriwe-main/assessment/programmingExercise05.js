/**
 * PROGRAMMING EXERCISE 05:
 *
 * Write a function that takes `checkMe` as an argument and returns `true` if it is a prime number.
 * If `checkMe` is equal to "dog", return "Woof!".
 * In all other cases, return `false`. Your function should not break if `checkMe` is not a real number.
 *
 * Hint: A prime number is a number that is only divisable by 1 and by itself. For example: 2, 3, 7, 13 are prime numbers
 */
function isPrime(checkMe) {
    var sqrcheckMe=Math.floor(Math.sqrt(checkMe));
      var prime = checkMe != 1;
      for(var i=2; i<sqrcheckMe+1; i++) { 
          if(!checkMe % i == 0) {
              prime = true;
              break;
          }
      }
      return prime;
  }