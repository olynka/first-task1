

const N = +prompt('Введіть число N');
const auditN = Number.isInteger(N);
console.log(`перевірка на ціле число N ${auditN}`);



const M = +prompt('Введіть число M');
const auditM = Number.isInteger(M);
console.log(`перевірка на ціле число N ${auditM}`);


if ((!auditN)||!(auditM)) {
     alert(`Введіть цілі числа`)
   
} else {

    const h = confirm("Потрібно пропускати парні?");

     function calculateTotal(a, b, h) {
    let sum = 0;
    
    if (h) {
      
    for (let i = a; i <= b; i += 1) {
        if (!(i % 2 == 0)) {
            sum += i;
        }
    }
} else {
    for (let i = a; i <= b; i += 1) {
            sum += i;
    }
}
return sum
}
  document.writeln(`Cума чисел ${calculateTotal(N,M,h)}`);
   
}






