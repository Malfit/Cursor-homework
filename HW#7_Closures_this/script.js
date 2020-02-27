const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
//------------------------------1-----------------------------------------
function getMyTaxes(salary) {
    return salary * this.tax;
}
const myTax = getMyTaxes.call(ukraine,3000);
console.log('My Tax: ', myTax);
//-------------------------------------------------------------------------

//-------------------------------2-----------------------------------------
function getMiddleTaxes() {
    return this.middleSalary * this.tax;
}
const middleTax = getMiddleTaxes.call(ukraine);
console.log('Middle Tax: ', middleTax);
//-------------------------------------------------------------------------

//----------------------------------3--------------------------------------
function getTotalTaxes() {
    return this.middleSalary * this.tax * this.vacancies;
}
const totalTax = getTotalTaxes.call(ukraine);
console.log('Total Tax: ', totalTax);
//--------------------------------------------------------------------------

//------------------------------------4----------------------------------------
function getMySalary( min, max ) {
    let salary = ( min + Math.random() * ( max + 1 - min ));
    let taxes  = salary * this.tax;
    let profit = salary - taxes;
    return console.log( 'My Salary: ', { salary, taxes, profit });
}
let mySalary = getMySalary.bind( ukraine, 1500, 2000);
mySalary();
setInterval( mySalary, 10000 );
//------------------------------------------------------------------------------


