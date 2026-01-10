// FizzBuzz

// Print numbers from 1 to 50:

// If divisible by 3 → Fizz

// If divisible by 5 → Buzz

// If divisible by both → FizzBuzz


for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else if (i % 3 === 0) {
        console.log('fizz');;
    }
}