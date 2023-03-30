
class Student{

    constructor(university, course, fullName) {
         this.university= university
        this.course = course;
        this.fullName = fullName;
        this._marks = [5, 4, 4, 5];
        this.student = true;
    }

    getInfo() {
    return `"Студент ${this.course} го курсу ${ this.university}, ${this.fullName}",`
    }
    get marks() {
        // if( this.student ){return this._marks}else{return this._marks=null}
        const excluded = this.student ? this._marks : this._marks = null;
        return excluded 
    };
    set marks(value) {
        this._marks.push(value)
        return this._marks
    };
    getAverageMark() {
        let sum = 0;
        for (let i = 0; i <  this._marks.length; i++) {
           
            sum +=this._marks[i]/this._marks.length;
        }
  
        return sum
    }
    dismiss() {
        this.student = false;
       return `Cтудента ${this.fullName} виключено з вуза`
    }
    recover() {
        this.student = true;
       return  `Cтудента ${this.fullName} відновлено до вуза`
    }
};


class BudgetStudent extends Student{

     constructor(...args) {
    super(...args);
        
     setInterval(() => {
      this.getScholarship();
    }, 30000);
  
    }
    getScholarship() {
        const statistik = this.getAverageMark();
      
        if(statistik>=4 && this.student === true){
          console.log(`Ви отримали 1400 грн. стипендії`)
        } else {
           console.log("Ви не отримали стипендії"); 
      }
    
    }
    
}



const newStudent = new Student('Вищої Школи Психотерапіїм.Одеса',"1",'Остап Родоманський Бендер');
console.log(newStudent.getInfo());
console.log(newStudent.marks);
newStudent.marks = 5;
console.log(newStudent.marks);
console.log(newStudent.getAverageMark());
console.log(newStudent.dismiss());
console.log(newStudent.recover());




const budgetStudent = new BudgetStudent('Вищої Школи Психотерапіїм.Одеса',"1",'Остап Родоманський Бендер');
budgetStudent.getScholarship()












