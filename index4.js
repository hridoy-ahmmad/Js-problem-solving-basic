// Check Palindrome

function palindrome(word) {
    const str = word.toString()
    const reversed = str.split('').reverse().join('')
    if (str === reversed) {
        return word
    }
    else {
        return false
    }
    // return str === reversed
}
console.log(palindrome('hello'));
console.log(palindrome('madam'));
console.log(palindrome(1001));


