// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
    const arr = str.split(''), arrLen = arr.length - 1;
    return arr.map((_, idx, arr) => arr[arrLen - idx]).join('')
}

module.exports = reverse;
