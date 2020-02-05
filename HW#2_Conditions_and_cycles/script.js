let firstNumber;
let secondNumber;
let resultConfirm;
let sum = 0;

for (i=0;i<100;i++)
{
    firstNumber = parseInt(prompt ("Plz write down first number"));
    if (isNaN(firstNumber)){
        alert("u wrote not a number");
    }
    else if (Number.isInteger(firstNumber)){
        console.log("N =", firstNumber);break;
    }
    else {
        alert("u wrote not an integer");
    }
}

for (i=0;i<100;i++)
{
    secondNumber = parseInt(prompt ("Plz write down second number"));
    if (isNaN(secondNumber)){
        alert("u wrote not a number");
    }
    else if (Number.isInteger(secondNumber) && (secondNumber > firstNumber)){
        console.log("M =", secondNumber);break;
    }
    else {
        alert("u wrote not an integer or your second number less then first");
    }
}

resultConfirm = confirm ("confirm skipping even numbers to add");

for (i = firstNumber;i < secondNumber+1; i++)
{
     if (resultConfirm)
     {
         if (i % 2 !== 0)
         {
             sum += i;
         }
     }
     else{
        sum += i;
    }
}
console.log("Skip even numbers? true - yes / false - no: ",resultConfirm);
console.log("Sum of numbers from n to m: ",sum);

allCalculations = {
    'First number ' : firstNumber,
    'Second number ' : secondNumber,
    'Skip even numbers? ' : resultConfirm,
    'Sum from first number to second ' : sum
}

for(let property in allCalculations) {
    document.write(`${property}: ${allCalculations[property]}<br>`);
  }
