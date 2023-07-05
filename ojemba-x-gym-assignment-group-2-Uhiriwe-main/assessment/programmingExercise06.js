/**
 * PROGRAMMING EXERCISE 06:
 *
 * Write a function that takes value `foo` as argument.
 * Return `true` if `foo` is a palindrome.
 *
 * A palindrome is a single word that is the same being read forwards and backwards.
 * Examples for palindromes: "tacocat", "madam", "radar", "wow", "~noon~", "12321".
 * Examples that shall not count as palindromes: "!.?madam...", "taco cat", "no lemon, no melon", "rAdAR".
 */

function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);

