


 const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};

const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};

const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

// функція1
function getMyTaxes(salary) {
  
    const tax = (Number(salary) * this.tax).toFixed(1);
    
return tax

}


console.log('функція 1');
console.log(`податок в Україні  ${getMyTaxes.call(ukraine, '3000')}`);
console.log(`податок в Litva  ${getMyTaxes.call(litva, '3000')}`);
console.log(`податок в Latvia  ${getMyTaxes.call(latvia, '3000')}`);


// функція 2
function getTotalTaxes(country) {
    const tax = (this.tax * this.middleSalary).toFixed(1);
    
  return tax
}

console.log('функція 2');
console.log(`Середній податок в Україні  ${getTotalTaxes.call(ukraine)}`);
console.log(`Середній податок в Litva  ${getTotalTaxes.call(litva)}`);
console.log(`Суредній податок в Latvia  ${getTotalTaxes.call(latvia)}`);

// функція 3

function getTotalTaxess(country) {
    const tax = (this.tax * this.middleSalary * this.vacancies).toFixed(1);

    return tax
}

console.log('функція 3');
console.log(`Всього податків в Україні  ${getTotalTaxess.call(ukraine)}`);
console.log(`Всього податоків в Litva  ${getTotalTaxess.call(litva)}`);
console.log(`Всього податоків в Latvia  ${getTotalTaxess.call(latvia)}`);


// функція 4

function getMySalary(country) {
   
    let object = {};
     object.salary = Number(((Math.random() * (2000 - 1500) + 1500)).toFixed(0));
    object.taxess = Number((object.salary * country.tax).toFixed(1));
    object.profit =object.salary -object.taxess;

console.log(object);
}


console.log('функція 4');
// console.log((getMySalary.call(ukraine)));
setInterval(getMySalary,10000,ukraine )