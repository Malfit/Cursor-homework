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
  //console.log(students);

// //--------------------------------------1-----------------------------------------------
//   const getSubjects = (stud) => {
//     let keys = Object.keys(stud.subjects)
//     const correctWords = []

//     keys.forEach((key) => {
//     let correctWord = key;
//     correctWord = (correctWord[0].toUpperCase() + correctWord.slice(1)).replace('_',' ');
//     correctWords.push(correctWord);
//   })
//   return correctWords;
// }

//   const subjects = getSubjects(students[0])
//   console.log('1: Subjects: ', subjects);
//----------------------------------------------------------------------------------------


  
  
  //-------------------------------------------4----------------------------------------------
  // const getStudentsNames = (stud) =>{
  // const names = [];

  //   for(i=0;i<stud.length;i++){
  //     names[i] = (Object.values(stud[i].name)).join('');
  //   }

  // const alphNames = names.sort();
  // return alphNames;
  // }

  // const sortNames = getStudentsNames(students);
  // console.log('4: SortNames: ', sortNames);
  //-------------------------------------------------------------------------------------------

   //--------------------------------------3--------------------------------------------------
  // 
  // let averageMark {
  //   averageMark: getAvgMark()
  // }
  // let info = Object.assign({},students, );
  // console.log('info: ', info);
  


//---------------------------------------2------------------------------------------------
const getAvgMark = (stud) => {
    
  let values = Object.values(stud.subjects);
  const allNumbers = values.flatMap(item=>item);
  let count = 0;
  for (i=0;i<allNumbers.length;i++){
    count+=allNumbers[i];
  }
  let avgMark = Number((count/allNumbers.length).toFixed(2));
  return avgMark;
}

const avgStudMark = getAvgMark(students[0]);
console.log('2: avgStudMark: ', avgStudMark);
//-----------------------------------------------------------------------------------------


//-----------------------------------------5-------------------------------------------------
  const getBestStudent = (stud) =>{
    let bestStud = 0;
        for(i=0;i<stud.length;i++){
        if(bestStud < getAvgMark(stud[i])){
        bestStud = getAvgMark(stud[i]);
      }
    }
    return bestStud;      
  }
  
  const bestStudent = getBestStudent(students);
  console.log('bestStudent: ', bestStudent);
  //-------------------------------------------------------------------------------------------


    
    //let objCopy = {};
    //let key;
  
    // for (key in students) {
    //   if (objCopy[key] !== "subjects")
    //   objCopy[key] = students[key]; 
    // }

    // let objCopy = Object.assign({}, students);
    // console.log('objCopy: ', objCopy);
    

