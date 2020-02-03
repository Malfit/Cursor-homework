let priceMilk = 15.678; 
let priceCaviar = 123.965;
let priceSalmon = 90.2345;
let maxPrice;
let minPrice;
let priceFoods;
let priceFoodsFloor;
let priceFoodsCeil;
let boolPriceFoodsFloor;
let surrender;
let avgPriceFoodsFixed2;

console.log(maxPrice = Math.max(priceCaviar,priceMilk,priceSalmon));
console.log(minPrice = Math.min(priceCaviar,priceMilk,priceSalmon));
console.log(priceFoods = (priceCaviar+priceMilk+priceSalmon));
console.log(priceFoodsFloor = (Math.floor(priceMilk) + Math.floor(priceCaviar) + Math.floor(priceSalmon)));
console.log(priceFoodsCeil = Math.ceil(priceFoods/100)*100);
console.log(boolPriceFoodsFloor = !Boolean(priceFoodsFloor%2)); //true - четное, false - нечетное 
console.log(surrender = 500 - priceFoods);
console.log(avgPriceFoodsFixed2 = ((priceFoods/3).toFixed(2)));
console.log("----------")


let randomDiscount = Math.round(Math.random()*100);
let savedMoney = (priceFoods / 100 * randomDiscount).toFixed(2);
let priceWithDiscount;
let lostProfit;

console.log(priceWithDiscount = (priceFoods - savedMoney).toFixed(2));
console.log(lostProfit = priceFoods/2 - savedMoney);
console.log("----------")


const allCalculations = {
'Max price' : maxPrice,
'Min price' : minPrice,
'Price foods' : priceFoods,
'Price foods floor' : priceFoodsFloor,
'Price foods ceil' : priceFoodsCeil,
'Bool price foods floor' : boolPriceFoodsFloor,
'Surrender' : surrender,
'Avg price foods (fixed2)' : avgPriceFoodsFixed2,
'Random discount' : `${randomDiscount}%`,
'Price with discount' : priceWithDiscount,
'Lost profit' : lostProfit}

// const allCalculations = 
// `Максимальная цена: ${maxPrice} 
// Минимальная цена: ${minPrice}
// Стоимость всех товаров: ${priceFoods}
// Стоимость всех товаров без копеек с округлением в меньшую сторону: ${priceFoodsFloor}
// Стоимость всех товаров с округлением до сотен в большую сторону: ${priceFoodsCeil}
// Булевое значение четной(true) или нечетной(false) суммы всех товаров c округлением в меньшую сторону: ${boolPriceFoodsFloor}
// Сумма сдачи, при оплате всех товаров (без округления), если клиент платит 500 грн: ${surrender}
// Cреднее значение цен, округленное до второго знака после запятой: ${avgPriceFoodsFixed2}
// Сумма к оплате округленная до 2 знака после запятой, с учетом случайной скидки: ${priceWithDiscount}
// Упущенная выгода, если клиент заплатил со скидкой, при себестоиомсти товаров ровно в два раза ниже их цены: ${lostProfit}`

//document.write(allCalculations);
//console.log(allCalculations);
for(let property in allCalculations) {
   document.write(`${property}: ${allCalculations[property]}<br>`);
 }