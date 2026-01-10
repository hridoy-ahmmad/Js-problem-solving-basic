// Check Palindrome

function palindrome(word){
    const reversed = word.split('').reverse().join('')
    if(word === reversed){
        return true
    }else{
        return false
    }
}
console.log(palindrome('hello'));
console.log(palindrome('madam'));


