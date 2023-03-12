//функція 1

const getMaxDigit = (number) => {
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
//функція 3

const name = (word) => {
    if (word[0] !== word[0].toUpperCase()) {
        const strint = word[0].toUpperCase() + word.substring(1)
return strint
    } else {
       return word
    }

}
// функція 4
const sum = (number) => {
    
    const sum =number-( number / 100 * 19.5)
    
    return sum
}

//функція 5
const getRandomNumber = (a, b) => {
    const number = (Math.floor(Math.random() * (b - a) + a))
 
    return number
};


//функція6
const countLetter = (letter, word) => {

    let count = 0;

    if (word === word.toLowerCase()) {
     let pos = word.indexOf(letter);

    while (pos !== -1) {
      count++;
        pos = word.indexOf(letter, pos + 1);
       
        }
    } else {
        const name = word.toLowerCase()
       let pos = name.indexOf(letter);

while (pos !== -1) {
  count++;
    pos = name.indexOf(letter, pos + 1);

}}

return count
}

//функція 7//функція 8
const convertCurrency = (currency) => {
    const dollar = currency.includes('$');
     const uah = currency.includes('грн');
    let currencyExchange = 0;
    if (dollar) {
        currencyExchange  = Number.parseFloat(currency) * 39+'грн';
       
        
    } else if(uah){
        currencyExchange = Number.parseFloat(currency) / 39+'$';
    } else {
        currencyExchange=`Ця валюти не конвертуються,`
    }


    return currencyExchange
}
//функція 9

const getRandomPassword = (number) => {
const chars = "012345678910";
 let password = "";
    if (number) {
        const passwordLength = number-1;
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
    } else {
        
        const passwordLength = 7;
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
    }
    return password
}





document.writeln(`Функція No1: ${getMaxDigit(1232526763671)},|`);
document.writeln(`Функція No3: ${name("Olya")},|`);
document.writeln(`Функція No4: ${sum(1000)},|`);
document.writeln(`Функція No5: ${getRandomNumber(1, 10)},|`);
document.writeln(`Функція No6: ${countLetter("t", "tsgthtTTtTYTTTttttTtshttt")},|`);
document.writeln(`Функція No7,8: ${convertCurrency("3900грн")},|`);
document.writeln(`Функція No9: ${getRandomPassword()},|`);






