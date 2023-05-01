 export const student = [{
name: "Tanya",
course: 3,
subjects: {
math: [4, 4, 3, 4],
algorithms: [3, 3, 3, 4, 4, 4],
data_science: [5, 5, 3, 4]
}
}, {
name: "Victor",
course: 4,
subjects: {
physics: [5, 5, 5, 3],
economics: [2, 3, 3, 3, 3, 5],
geometry: [5, 5, 2, 3, 5]
}
}, {
name: "Anton",
course: 2,
subjects: {
statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
english: [5, 3],
cosmology: [5, 5, 5, 5]
}
    }];
export function getSubjects(student)
     

  {
      const result = [];
      const subjects = Object.keys(student.subjects);
      for (let i= 0; i < subjects.length; i++) {
          const element = subjects[i];
   
          const capitalizedWord= element[0].toUpperCase() + element.substring(1);
        
          result.push(capitalizedWord.replace('_', ' '));

      }
      return result
}
console.log(`функція 1`);
console.log(getSubjects(student[2]));
