const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

//-------------1------------------------------------------------------------
const getPairs = (stud) => {
    return [
      [students[0], students[2]],
      [students[1], students[3]],
      [students[4], students[5]]
      ];
}
const pairs = getPairs(students);
console.log(pairs);
//---------------------------------------------------------------------------

//----------------2----------------------------------------------------------
const getPairsSubject = (stud,them) => {
  return [
    [([students[0],students[2]].join(' и ') + "." + themes[0] ).split(".")],
    [([students[1],students[3]].join(' и ') + "." + themes[1] ).split(".")],
    [([students[4],students[5]].join(' и ') + "." + themes[2] ).split(".")]
  ];
}
const pairSub = getPairsSubject(students,themes);
console.log(pairSub);
//---------------------------------------------------------------------------

//---------------------------3-----------------------------------------------
const getStudentMark = (stud,mark) => {
  return [
    [students[0],marks[0]],
    [students[1],marks[1]],
    [students[2],marks[2]],
    [students[3],marks[3]],
    [students[4],marks[4]],
    [students[5],marks[5]]
  ];
}
const studMark = getStudentMark(students,marks);
console.log(studMark);
//---------------------------------------------------------------------------

//--------------------------4------------------------------------------------
const MIN = 1;
const MAX = 5;
const getPairsSubjectMark = (stud,sub,mark,min,max) => {
  return [
  [([students[0],students[2]].join(' и ') + "." + themes[0] + "." + 
      Math.floor(MIN + Math.random() * (MAX + 1 - MIN))).split(".")],
  [([students[1],students[3]].join(' и ') + "." + themes[1] + "." +
      Math.floor(MIN + Math.random() * (MAX + 1 - MIN))).split(".")],
  [([students[4],students[5]].join(' и ') + "." + themes[2] + "." + 
      Math.floor(MIN + Math.random() * (MAX + 1 - MIN))).split(".")]  
  ];
}
const pairSubjectMark = getPairsSubjectMark(students,themes,marks,MIN,MAX);
console.log(pairSubjectMark);
//-----------------------------------------------------------------------------

allCalculations = {
  'Pairs ' : pairs,
  'Pairs and topic ' : pairSub,
  'Sudent and his mark ' : studMark,
  'Pairs, topic and mark 1-5 ' : pairSubjectMark
}

for(let property in allCalculations) {
  document.write(`${property}:<br> ${allCalculations[property]}<br><br>`);
}