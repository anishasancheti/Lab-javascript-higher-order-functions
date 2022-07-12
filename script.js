// Function #1: Array Slice
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
let modifiedFood = foods.slice(1, foods.length-1);
console.log(modifiedFood);

// Function #2: Array Splice
let food = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
food.splice(2, 0, 'noodles','icecream');
console.log(food);

// Function #3: Filter
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];

let isEven = (numberArray) => {
    let res = numberArray.filter(e => e % 2 == 0);
    return res;
}
console.log(isEven(numberArray));

const isPrime = (numberArray) => {
    let res = numberArray.filter(num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) 
                return false;
        }
        return num !== 1;
    });
    return res;
}
console.log(isPrime(numberArray));

// Function #4: Reject
const nonPrime = (numberArray) => {
    const isPrime = n => {
        if (n===1){
        return false;
        }else if(n === 2){
           return true;
        }else{
           for(let x = 2; x < n; x++){
              if(n % x === 0){
                 return false;
              }
           }
           return true;
        };
    };
    const filterPrime = numberArray => {
        const filtered = numberArray.filter(el => !isPrime(el));
        return filtered;
    };
    let res = filterPrime(numberArray);
    return res;
}
console.log(nonPrime(numberArray));

// Function #5: Lambda
let isEvens = (numberArray) => {
    return numberArray.filter(e => e % 2 == 0);
}
console.log(isEvens(numberArray));

// Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers = (myArray) => {
    let res = myArray.map(e => e * e);
    return res;
}
console.log(findSquareOfNumbers(myArray));

// Function #7: Reduce
const myArrays = [2, 3, 5, 10];
let multiply = (myArrays) => {
    let res = myArrays.reduce((mul, e) => mul * e);
    return res;
}
console.log(multiply(myArrays));