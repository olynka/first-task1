const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


function filtration (students)  {
    let men = [];
    let women = [];
    let menWomen = [];
    
    for (const student of students) {
        if (student=="Олена" || student==="Світлана" || student==="Іра") {
              women.push(student);

        } else{
             men.push(student);
    }
    
    };

for (let index = 0; index < men.length; index++) {
    
    const menWomens = (`${men[index]}, ${women[index]}`).split(",");
    menWomen.push(menWomens)
    
};
return menWomen

}

console.log(filtration(students));





function taskPairs(menWomens,themes ) {
 
    let themeСommands = [];
  
    for (let i = 0; i <menWomens.length; i++) {
      themeСommands.push(menWomens[i].concat(themes[i].split(',')));
  
   }
    

return themeСommands
}
console.log(taskPairs(filtration(students), themes));




function estimation(student, rating) {

    let estimation = [];
    
    for (let i = 0; i <student.length; i++) {
        const ratings = (`${student[i]}, ${rating[i]}`).split(",");
        
        estimation.push(ratings)
    
     }
return estimation
}

console.log(estimation(students, marks));



function assessmentProject(datas) {

    let result = [];

    for (let i = 0; i < datas.length; i++) {
  let discount = (Math.random() * 5).toFixed();
          const f =datas[i].concat(Number(discount)) ;
    
        result.push(f)
     }

     
return result
}

console.log(assessmentProject(taskPairs(filtration(students), themes)));


