export const getMaxDigit = (number) => {
    let maxNumber = 0;
   
    let number2 = number.toString();
  
    for (let i = 0; i < number2.length; i++) {
       
      const beginning = parseInt(number2[i]);
      if (beginning > maxNumber) {
        maxNumber = beginning;
      }
    }
    
    return maxNumber
}