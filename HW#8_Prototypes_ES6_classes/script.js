class Student {
    constructor(university, course, fullName,marks){
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.isOpenSomeFlag = false
    }

    getInfo(){
        return 'Студент' + this.course + 'а, ' + this.university+', '+this.fullName;
    }

    get mark(){
        if(this.isOpenSomeFlag) {
            return null;
        }
        else {
            return this.marks;
        }
    }

    set mark(value){
        if(this.isOpenSomeFlag) {
            return null;
        }
        else {
            return this.marks = [...this.marks, value];
        }
    }

    get averageMark(){
        let sum = 0;
        for(let i = 0; i<this.marks.length;i++){
            sum+=this.marks[i];
        }
        return sum / this.marks.length;
    }
    
    dismiss(){
        this.isOpenSomeFlag  = true ;
    }

    recover(){
        this.isOpenSomeFlag  = false ;
    }

//  set mark(value){
//      if (this.marks === null){
//          return null;
//        }
//       else {
//          return this.marks.push(value);
//        }
//    }

    // dismiss(){
    //         return this.marks = null;        
    // }

    // recover(){
    //         return this.marks = marks;
    // }
}

let ostap = new Student("Высшая Школа Мошенничества"," 1 курс", "Остап Бендер", [5, 4, 4, 5]);

//--2
console.log('Student Info : ',      ostap.getInfo());

//--3
console.log('Get Ostap Marks: ',  ostap.mark);

//--4
ostap.mark = 5;
console.log('Set Mark To Ostap: ', ostap.mark);

//--5
console.log('Average Ostap Mark: ', ostap.averageMark);

//--6
ostap.dismiss();
console.log('Get Ostap Marks After Dismiss: ',  ostap.mark);
ostap.mark = 5;
console.log('Set Mark To Ostap After Dismiss: ', ostap.mark);

//-7
ostap.recover();
console.log('Get Ostap Marks After Recover: ',  ostap.mark);
ostap.mark = 3;
console.log('Set Ostap Marks After Recover: ', ostap.mark);


console.log('----------------------------------------------------------------------')


class BudgetStudent extends Student{
    constructor(university, course, fullName,marks,scholarship){
        super(university, course, fullName,marks);
        this.scholarship = scholarship;
        this.isOpenSecondFlag = false;


        let interval = setInterval(()=>this.studScholarship,1000);
        setTimeout(()=> clearInterval(interval),10001)
    }

    get studScholarship(){
        if (this.averageMark >= 4 && this.isOpenSecondFlag === false){
        console.log ('Вы получили '+ this.scholarship + ' грн стипендии');
        }
        else {
            console.log("Sorry your average mark less then 4, or you dismissed")
        }
    }

    dismiss(){
        this.isOpenSecondFlag = true;
    }

    recover(){
        this.isOpenSecondFlag = false;
    }
}

let max = new BudgetStudent("Karazin University", " 2 курс", "Max Eagle", [5, 5, 5, 3], "1400");

setTimeout(()=> max.dismiss(),10002);
setTimeout(()=> max.studScholarship,10020);

