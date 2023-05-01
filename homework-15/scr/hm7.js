


export const ukraine = {
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
export function getMyTaxes(salary) {
  
    const tax = (Number(salary) * this.tax).toFixed(1);
    
return tax

}