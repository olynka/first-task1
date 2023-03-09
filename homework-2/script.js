// version 1

// перше число від якого відштовхуємося
let N;
// перевіряємо чи цілі  числа циклом while
while ((!Number.isInteger(N))||N<0) {
    N = +prompt('Введіть правельне число N');
}


// друге число до якого проганяємо цикл
let M;
// перевіряємо чи цілі  числа циклом while
while ((!Number.isInteger(M))| M<=N) {
   M = +prompt('Введіть правельне число  M');
}



let sum = 0;


// отримуємо інформацію отримуємо інформацію про те чи потрібно пропускати парні числа
const IsSteamy = confirm("Потрібно пропускати парні?");


// IsSteamy дає нам булеве значення,і в залежності від того вираховуємо суму
    if (IsSteamy) {
      
    for (let i = N; i <= M; i += 1) {
        if (!(i % 2 == 0)) {
            sum += i;
           
        }
    }
} else {
    for (let i = N; i <= M; i += 1) {
        sum += i;
       
    }
}
document.writeln(`N=${N},  M=${M} , виключаємо парні числа?= ${IsSteamy} ,  сума чисел  ${sum}`)
 





// version 2
// const N = +prompt('Введіть число N');
// const auditN = Number.isInteger(N);
// console.log(`перевірка на ціле число N ${auditN}`);



// const M = +prompt('Введіть число M');
// const auditM = Number.isInteger(M);
// console.log(`перевірка на ціле число N ${auditM}`);


// if ((!auditN)||!(auditM)) {
//      alert(`Введіть цілі числа`)
   
// } else {

//     const h = confirm("Потрібно пропускати парні?");

//      function calculateTotal(a, b, h) {
//     let sum = 0;
    
//     if (h) {
      
//     for (let i = a; i <= b; i += 1) {
//         if (!(i % 2 == 0)) {
//             sum += i;
//         }
//     }
// } else {
//     for (let i = a; i <= b; i += 1) {
//             sum += i;
//     }
// }
// return sum
// }
//   document.writeln(`Cума чисел ${calculateTotal(N,M,h)}`);
   
// }







