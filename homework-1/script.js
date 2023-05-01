
const priceHeadphone = 15.678;
const priseСharger=123.965;
const prisePhone=90.2345;

const max=Math.max(prisePhone,priceHeadphone, priseСharger);
const min=Math.min(prisePhone,priceHeadphone, priseСharger);

const sum=prisePhone+priseСharger+priceHeadphone;
const sumWholeNumbers = Math.floor(priceHeadphone) + Math.floor(priseСharger) + Math.floor(prisePhone);
const  sumWholeNumbers2 = Math.floor(sum);

const sumaRounding= Math.round(sum / 100) * 100;

const customerPaid=500;
const difference=sum-500;

const boolean = Boolean(sumWholeNumbers%2);

const averageValue=(sum/3).toFixed(1);
const discount=(Math.random() *10).toFixed();
const sumaDiscont=(sum-(sum*discount)/100).toFixed(2);
const profit= ((sum/2)-discount).toFixed(0);



console.log(`Максимальне число ${max}`)
console.log( `Мініммальне число ${min},`);
console.log( `Сума ${sum},`);
console.log(`Сума товарів, цілих чисел, без копійок, округлена у меншу сторону ${sumWholeNumbers}`);
console.log(`сума товару округленва  в меншу сторону${sumWholeNumbers2}`);
console.log(`сума товару округленва до сотень${sumaRounding}`);
console.log(`булеве значення ${boolean}`);
console.log(`сумa решти, при оплаті всіх товарів${difference}`);
console.log(`середнє значення цін,${averageValue}`);

console.log(`випадковa знижкa% ${discount}%`);
console.log(`сума з випадковою знижкою${sumaDiscont}`);
console.log(`Чистий прибуток ${profit}`);



document.writeln(`Максимальне число ${max}, Мініммальне число ${min}, Сума ${sum}, Ціла частина вартості між собою ${sumWholeNumbers},
Cума товару округленва до сотень${sumaRounding}, булеве значення ${boolean} ,Cумa решти, при оплаті всіх товарів${difference},Cереднє значення цін, ${averageValue}, 
Bипадковa знижкa${sumaDiscont},Чистий прибуток ${profit}`)
