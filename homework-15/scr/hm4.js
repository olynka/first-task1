export const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


export function filtration (students)  {
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







