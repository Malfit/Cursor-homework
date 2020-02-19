//------------------------1------------------------------------------------------  +
const arr = [];
const getRandomArray = (len,min,max) =>{
    for (i=0;i<len;i++){
        let randomNum = Math.floor(min + Math.random() * (max + 1 - min));
        arr.push(randomNum);
    }
    return arr;
}
const randomArray = getRandomArray(15,1,100);
console.log(randomArray);
//------------------------------------------------------------------------------

//-----------------------------2------------------------------------------------- -
// const getModa = (...numbers) =>{
//     numbers.sort((a,b) =>  a - b);
    
//     console.log(numbers);
//     return true;
// }
// //const moda = [];
// getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
//--------------------------------------------------------------------------------

//-------------------------------3------------------------------------------------  +
let total = 0;
const getAverage = (...numbers) =>{
    for (i = 0;i<numbers.length;i++){
        total += numbers[i];
    }
    return total / i;
}
const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(average);
//----------------------------------------------------------------------------------

//------------------------------------4--------------------------------------------- +
let mediana = 0;
const getMedian = (...numbers) =>{
    numbers.sort((a,b) =>  a - b);
    if (numbers.length % 2 == 1 ){
        mediana = numbers[Math.floor(numbers.length/2)];       
    }
    else {
        mediana = ((numbers[numbers.length/2] + numbers[numbers.length/2-1])/2);
    }
    return mediana;
}
const median1 = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
const median2 = getMedian(1, 2, 3, 4);
const median3 = getMedian(1, 2, 3, 4, 5);
console.log("Медиана 1 =", median1,"  Медиана 2 =", median2,"  Медиана 3 =", median3);
//------------------------------------------------------------------------------------

//------------------------------------5---------------------------------------------------  +
const getFilterEvenNumbers = (...numbers) => numbers.filter(numbers => numbers % 2 !== 0);
const filterEvenNumbers = getFilterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(filterEvenNumbers);
//----------------------------------------------------------------------------------------

//-----------------------------------------6-------------------------------------------------  +
const getCountPositiveNumbers = (...numbers) => {
const countPositive = numbers.filter(numbers => numbers > 0);
return countPositive.length;
}
const countPositiveNumbers = getCountPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(countPositiveNumbers);
//-------------------------------------------------------------------------------------------

//--------------------------------------------7----------------------------------------------  +
const getDividedByFive = (...numbers) =>  numbers.filter(numbers=>numbers % 5 === 0);
const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(dividedByFive);
//-------------------------------------------------------------------------------------------


allCalculations = {
    'Function №1: Random array' : randomArray,
    'Function №3: Average ' : average,
    'Function №4: Mediana 1' : median1,
    '___________  Mediana 2' : median2,
    '___________  Mediana 3' : median3,
    'Function №5: Filter even numbers ' : filterEvenNumbers,
    'Function №6: Count positive numbers ' : countPositiveNumbers,
    'Function №7: Divided by five' : dividedByFive
  }
  
  for(let property in allCalculations) {
    document.write(`${property}: ${allCalculations[property]}<br><br>`);
  }