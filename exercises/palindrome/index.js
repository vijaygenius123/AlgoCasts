// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let start = 0, end = str.length-1;
    const arr = str.split('')
    while(start<=end){
        if(arr[start] !== arr[end]) return false
        start++;
        end--;
    }
    return true
}

module.exports = palindrome;
