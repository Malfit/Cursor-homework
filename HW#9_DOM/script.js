let box = document.querySelector('.bigBox');

const randomNum = () => Math.floor(Math.random() * 256);
const generateColor = () => `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

const  generateSquares = () => {
    box.innerHTML = '';
    for (let i = 0; i < 25; i++){
        let littleBox = document.createElement('div');
        littleBox.style.width = '50px';
        littleBox.style.height = '50px';
        littleBox.style.backgroundColor = generateColor();
        box.append(littleBox);
    }
}
generateSquares();

let intervalGenerationSquares = generateSquares.bind(null);
const generateBlocksInterval = () => setInterval(intervalGenerationSquares,1000);

generateBlocksInterval();
