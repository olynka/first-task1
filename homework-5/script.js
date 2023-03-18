// функція 1
const getRandomArray = (length, min, max) => {
    const array = [];
    for(let i = 0; i<length; i++){
        const random = Math.floor(Math.random() * (max - min) + min);
        array.push(random);
    } 

    return array;
}
   console.log(`функція 1`);
    console.log(getRandomArray(15, 1, 100));


getRandomArray(15, 1, 100);

// функція 3
function getAverage(...numbers) {
    let sum = 0;
  
  numbers.forEach(function (number) {
    if (number % 1 === 0) {
      sum += number / numbers.length;
   
     
    }
      
});

  return sum.toFixed(1)
    
}
console.log(`функція 3`);
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2,));

// функція 4
function getMedian(...numbers){
  
  let result = 0;
  let arrayIntegers= [];
  
  const massif= numbers.sort((a, b) => a - b);
  console.log(massif);
  
  for (let i = 0; i < massif.length; i++) {
      
    if (massif[i] % 1 === 0) {
    arrayIntegers.push(massif[i]);
   
    
     const averageArrayIndex = Math.floor((arrayIntegers.length) / 2);
    let averageArrayIndex2 = averageArrayIndex - 1;

         result = (arrayIntegers.length-1) % 2 === 0 ?arrayIntegers[averageArrayIndex] :(arrayIntegers[averageArrayIndex2] + arrayIntegers[averageArrayIndex])/2;
     }
   
  }

return result
  
}
console.log(`функція 4`);
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// функція 5
function filterEvenNumbers(...numbers) {

  const positiveValues =numbers.filter(number => number % 2 !== 0);

return positiveValues
}

console.log(`функція 5`);
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));


//  функція 6
 
function countPositiveNumbers(...numbers) {
  const positiveValues = numbers.filter(number => number > 0);
  
  return positiveValues.length
} 

console.log('функція 6');
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));


// функція 7
function getDividedByFive(...numbers) {

    const positiveValues =numbers.filter(number => number%5===0);

   return positiveValues
};
console.log(`функція 7`);
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



// function getModa(...numbers) {
      
//   sum = 0;

//   for (let index = 0; index < numbers.length; index++) {
//     const f= numbers[index]
    
//     if (numbers[index] == numbers[index]) {
//     console.log(numbers[index]);
      
//     }
//   }
 
//   return 
// }
//     console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
