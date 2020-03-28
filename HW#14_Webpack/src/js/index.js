import randomDiscount from '../../../HW#1_Variables_and_data_types/Script';
import {getRandomPassword} from '../../../HW#3_Functions/script';
import generateColor from '../../../HW#9_DOM/script';
import Photo from '../assets/Webpack.jpg';

import '../../../HW#10_Events/style.css';
import  '../styles.css';

document.querySelector("#lab9").addEventListener("click", function(event){
   event.target.style.backgroundColor = generateColor();
})

document.querySelector("#lab1").addEventListener("click", function(event){
   event.target.innerText = `Random discount: ${randomDiscount()}%`;
})

document.querySelector("#lab3").addEventListener("click", function(event){
   event.target.innerText = `Random password: ${getRandomPassword(8)}`;
})

let container = document.querySelector('.container');

const IMG = `
   <img src=${Photo} alt="image not found">
   `;
container.insertAdjacentHTML("afterbegin", IMG);
container.insertAdjacentHTML("beforeend", IMG);

console.log("---------------Webpack--------------------");
console.log('randomDiscount: ', randomDiscount() + "%");``
console.log('getRandomPassword: ', getRandomPassword(9));
console.log('generateColor: ', generateColor());







