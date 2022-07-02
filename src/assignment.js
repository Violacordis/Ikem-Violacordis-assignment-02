// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
  // declaring a variable sum and assigning it to 0
  let sum = 0;
  for(let i = 0; i < arrayOfNumbers.length; i++) {
    // console.log(i)
    sum += arrayOfNumbers[i];
    // console.log(sum)
  }
  return sum;
}
assignment.sumOfNumbers = sumOfNumbers;

/**
 * Challenge - 2
 * 
 * Count all even numbers within an array of numbers.
 * If you did Challenge - 2, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array containing even or non-even numbers
 * @returns number the count of even numbers
 */
function countEvenNumbers(arrayOfNumbers) {
  let evenNumber = [];
  //getting each of the numbers in the array and checking if it's an even number
  arrayOfNumbers.forEach(number => {
    if(number % 2 === 0) {
      // Pushing the even number into the evenNumber array
      evenNumber.push(number)
      // console.log(evenNumber)
    }
  })
     return evenNumber.length
 
}
assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
  let numberInFahrenheit = [];
  
  // Getting each number in the array of numbers
  arrayOfNumbers.forEach(number => {
    
    // Assigning the Celsius to Fahren calculation of each number to a variable
    let convertToFahrenheit = Math.trunc(number * 1.8 + 32);
    
    // Pushing the converted number to an empty new array numberInFahren
    numberInFahrenheit.push(convertToFahrenheit)
    // console.log(numberInFahrenheit)
  })
  return numberInFahrenheit
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

