

const N = +prompt('Введіть число');
const auditN = Number.isInteger(N);


const M = +prompt('Введіть число');
const auditM=Number.isInteger(M)


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






