 const students = [{
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

// функція 1
  function getSubjects(student)
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
console.log(getSubjects(students[2]));

    
// функція 2

function getAverageMark (student){
    let assessmentSubjects = Object.values(student.subjects)
    let sum = 0;
    
    let number = [];
    for (let i = 0; i < assessmentSubjects.length; i++) {
       
        for (let j = 0; j < assessmentSubjects[i].length; j++) {

            sum += assessmentSubjects[i][j];
            number.push(assessmentSubjects[i][j]);
           
        }
    }

    return (sum / number.length).toFixed(2);
}
console.log(`функція 2`);
console.log(getAverageMark(students[0]));

// функція 3

function getStudentInfo(student) {

return  `"course": ${student.course}, "name":${student.name}, "averageMark": ${getAverageMark(student)}`
}

console.log(`функція 3`);
console.log(getStudentInfo(students[0]));


var arr = [1,3,2,4,5];
arr.splice(0, 1, arr[1], arr[0]);
console.log(arr)

// функція 4
 function getStudentsNames(students){
     const nameStudens = [];

     for (const student of students) {
       
         nameStudens.push(student.name);
     }
     return  nameStudens.sort(function(a, b) {
  return a.localeCompare(b);
});
}
console.log(`функція 4`);
console.log(getStudentsNames(students));


// функція 5
function getBestStudent(students) {

    let successfulStudent = []
    students.forEach(function(student) {
        successfulStudent.push(getAverageMark(student))
    });

    
    const max = Math.max(...successfulStudent);
      let result = Object.values(students.find(students => (getAverageMark(students) == max)))
    return(result[0])
   
    
        }

console.log(`Функція 5`);
console.log(getBestStudent(students));


// фурлція 6

function calculateWordLetters(word) {
    const object = {};
    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        if (object[element]) {
       object [element]++;
      } else {
        object[element] = 1;
      }
        
    }
return object
}
console.log('функція 6');
console.log(calculateWordLetters('test'));

