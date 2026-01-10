// Reverse a String

function reverseString (str){
    const rev = str.split('').reverse().join('')
    return rev
}
console.log(reverseString('hello'));
