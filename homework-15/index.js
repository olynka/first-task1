console.log('hello');
import { max } from "./scr/hm1.js";
import { getMaxDigit } from "./scr/hm3.js";
import { filtration,students} from "./scr/hm4.js";
import { getRandomArray } from "./scr/hm5.js";
import { getSubjects, student } from "./scr/hm6.js";
import { ukraine, getMyTaxes } from "./scr/hm7.js";
import { Student, newStudent } from "./scr/hm8.js";
import { getRandomChinese } from "./scr/hm11.js";




console.log(`homework-1 Максимальне число ${max}`);
console.log(`homework-2  get max ${getMaxDigit(1232526763671)},|`);
console.log(`homework-4 ${filtration(students)}`);
console.log(`homework-5 ${getRandomArray(15, 1, 100)}`);
console.log(`homework-6 ${getSubjects(student[2])}`);
console.log(`homework-7  податок в Україні ${getMyTaxes.call(ukraine, '3000')}`);
console.log(`homework-8 ${newStudent.getInfo()}`);
console.log(`homework-11 ${getRandomChinese(6).then(result=>console.log(result)).catch(error => {
    console.log(error);
})}`);
  





 










