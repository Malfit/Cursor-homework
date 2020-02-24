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
  const pairSubject = [];
  for (i=0;i<pairs.length;i++){
    pairSubject[i] = (pairs[i].join(' и ') + "." + themes[i] ).split(".");
  }
  return pairSubject;
}
const pairSub = getPairsSubject(students,themes);
console.log(pairSub);
//---------------------------------------------------------------------------

//---------------------------3-----------------------------------------------
const getStudentMark = (stud,mark) => {
  const studMarks = [];
  for (i=0;i<students.length;i++){
    studMarks[i] = [students[i],marks[i]];
  }
  return studMarks;
}
const studMark = getStudentMark(students,marks);
console.log(studMark);
//---------------------------------------------------------------------------

//--------------------------4------------------------------------------------
const MIN = 1;
const MAX = 5;
const getPairsSubjectMark = (stud,sub,mark,min,max) => {
  const pairsSubMarks = [];
  for (i=0;i<pairs.length;i++){
    pairsSubMarks[i] = (pairs[i].join(' и ') + "." + themes[i] + "." 
    + Math.floor(MIN + Math.random() * (MAX + 1 - MIN))).split(".")
  }
  return pairsSubMarks;
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