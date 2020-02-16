// function #1 +-
// const getMaxDigit = (num) => {

//   //let biggestNum = 0;
//   let numString = num.toString();
//   numString.split('');
//   console.log(numString);

//     // if (num.charAt(i)>biggestNum){
//     // biggestNum = num.charAt(i);
    
  
//   return numString;
// }
// document.writeln(`Функция №1: ${getMaxDigit(5674)}`);

//+-

//кусок со второй лабы
// let arguments;
// for (i=0;i<100;i++)
// {
//     arguments =  (parseInt(prompt ("fun#1 input number")));
//     if (isNaN(arguments)){
//         alert("u wrote not a number");
//     }
//     else if (Number.isInteger(arguments)){
//         break;
//     }
//     else {
//         alert("u wrote not an integer");
//     }
// }
 
//+-
const getMaxDigit = (num) => {
    let mas = [...arguments];
    let maxDigit=0;
    for (i=0;i<mas.length;i++)
    {
        if (mas[i]>maxDigit)
        {
            maxDigit = mas[i];
        }
    }
    return maxDigit;
  }

  //нет проверок

  let arguments = prompt (" fun#1 input number");
  //document.writeln(`Функция №1: ${getMaxDigit(45692)}`);

//----------------------------------------------------
//function #2 +
const getPowerNumber = (num,power) => {
  let result = num;
  for (i = 0;i<power-1;i++){
    result *= num;
  }
  return result;
}
//document.writeln(`Функция №2: ${getPowerNumber(3,3)}`)
//----------------------------------------------------
//function #3 +
const getCorrectName = (name) => { 
  let lowerName = name.toLowerCase();
  let firstLetter = name[0].toUpperCase();
  let secondPartName = lowerName.slice(1);
  let trueName = firstLetter+secondPartName;
  return trueName;
}
//document.writeln(`Функция №3: ${getCorrectName("иВаН")}`)
//----------------------------------------------------
//function #4 +
const getTaxPaidSalary = (salary) => {
  trueSalary = salary / 100 * 80.5;
  return trueSalary;
}
//document.writeln(`Функция №4: ${getTaxPaidSalary(1000)}`)
//----------------------------------------------------
// function #5 +
const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
//document.writeln(`Функция №5: ${randomInteger(4,13)}`)
//----------------------------------------------------
// function #6 -
// const getCountLetter = (str,ch) => {
//   let counter = 0;
//   for (i = 0; i < str.length; i++) {
//       if (str[i] === ch){
//       counter++; debugger;
//     } 
//   }
//   return counter;
// }
// document.writeln(`Функция №6: ${getCountLetter('асталависта','a')}`)
//----------------------------------------------------
// function #7
//----------------------------------------------------
// function #8 +
// нет проверок на ввод числа
const getRandomPassword = (lengthPass) => {
  let countNull=1;
  for (i=0;i<lengthPass;i++){
    countNull*=10;
  }
  let password = (Math.random()*countNull).toFixed();
  return password;
}
if (lengthPassword = prompt(" fun#8 input length of password:")){
  lengthPassword = lengthPassword;
}
else lengthPassword = 8;
//document.writeln(`Функция №8: ${getRandomPassword(lengthPassword)}`)
//----------------------------------------------------
// function #9
//----------------------------------------------------
//function #10 +
 const isPalyndrom = (str) => {
  if (str === ''){
    return false;
  }
  else {
    str = str.replace(/[.,?:;\/() _-]/g, '').toLowerCase();
    return str == str.split('').reverse().join('');
  }
}
 //document.writeln(`Функция №10: ${isPalyndrom("аргентина манит негра")}`)

//----------------------------------------------------
// function #11



console.log(`fun#1 (max num): ${getMaxDigit(45692)}
fun#2 (power of num): ${getPowerNumber(3,3)}
fun#3 (correct name): ${getCorrectName("иВаН")}
fun#4 (tax paid salary): ${getTaxPaidSalary(1000)}
fun#5 (random integer): ${randomInteger(4,13)}
fun#8 (generation password) ${getRandomPassword(lengthPassword)}
fun#10 (polyndrom): ${isPalyndrom("аргентина манит негра")}`)






  

