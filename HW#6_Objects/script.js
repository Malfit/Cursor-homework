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

//--------------------------------------1-----------------------------------------------
  const getSubjects = (stud) => {
    let keys = Object.keys(stud.subjects)
    const correctWords = [];

    keys.forEach((key) => {
      let correctWord = key;
      correctWord = (correctWord[0].toUpperCase() + correctWord.slice(1)).replace('_',' ');
      correctWords.push(correctWord);
    })
    return correctWords;
  }

  const subjects = getSubjects(students[0])
  console.log('1: Subjects: ', subjects);
//----------------------------------------------------------------------------------------

//---------------------------------------2------------------------------------------------
const getAvgMark = (stud) => {
  let values = Object.values(stud.subjects);
  const allNumbers = values.flatMap(item=>item);
  let count = 0;

  for (let i=0;i<allNumbers.length;i++){
    count+=allNumbers[i];
  }

  let avgMark = (count/allNumbers.length).toFixed(2);
  return avgMark;
}

  const avgStudMark = getAvgMark(students[0]);
  console.log('2: avgStudMark: ', avgStudMark);
//-----------------------------------------------------------------------------------------
  
//--------------------------------------3--------------------------------------------------
  const getStudentInfo = (stud) =>{
    const { name, course } = stud;
    return {
    name, course, averageMark: getAvgMark(stud)
    }
  }
  const studInfo = getStudentInfo(students[0]);
  console.log('3: Student Info: ', studInfo);
//------------------------------------------------------------------------------------------

//-------------------------------------------4----------------------------------------------
  const getStudentsNames = (stud) =>{
  const names = [];

    for(let i=0;i<stud.length;i++){
      names[i] = (Object.values(stud[i].name)).join('');
    }

  const alphNames = names.sort();
  return alphNames;
  }

  const sortNames = getStudentsNames(students);
  console.log('4: Sort Names: ', sortNames);
//-------------------------------------------------------------------------------------------

//-----------------------------------------5-------------------------------------------------
  const getBestStudent = (stud) =>{
    let bestStud = 0;
    let nameBestStud = Object.values(stud[0].name);

    for(let i=0;i<stud.length;i++){
      if(bestStud < getAvgMark(stud[i])){
        bestStud = getAvgMark(stud[i]);
        nameBestStud = (Object.values(stud[i].name)).join('');
      }
    }
    return nameBestStud;      
  }
  
  const bestStudent = getBestStudent(students);
  console.log('5: Best Student: ', bestStudent);
//-------------------------------------------------------------------------------------------

//----------------------------------------6----------------------------------------------------
  const calculateWordLetters = (str) => {
    let result = {};
    let word = str.toLowerCase();
    for (let i = 0;i<word.length;i++){
        if(!Object.keys(result).includes(word[i])){
          result[word[i]] = 1;
        }
        else result[word[i]]+=1;
    }
    return result;
  }

  const calculatedWordLetters = calculateWordLetters('test');
  console.log('6: Calculated Word Letters: ', calculatedWordLetters);
//-----------------------------------------------------------------------------------------------

allCalculations = {
      'Function №1: Correct Subjects ' : subjects,
      'Function №2: Average Student Mark ' : avgStudMark,
      'Function №3: Student Info ' : studInfo,
      'Function №4: Sorted Names' : sortNames,
      'Function №5: Best Student ' : bestStudent,
      'Function №6: Calculated Word Letters ' : calculatedWordLetters,
}
    
    for(let property in allCalculations) {
      document.write(`${property}: ${allCalculations[property]}<br><br>`);
    }