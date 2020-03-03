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
//---------------------------------------------------------------------------------------------------------

// let littleBox = document.createElement('div');
// littleBox.style.backgroundColor = generateColor();
// littleBox.style.width = '50px';
// littleBox.style.height = '50px';
// box.prepend(littleBox);



// let littleBox1 = document.createElement('div');
// littleBox1.style.backgroundColor = generateColor();
// littleBox1.style.width = '50px';
// littleBox1.style.height = '50px';
// box.append(littleBox1);


// let littleBox2 = document.createElement('div');
// littleBox2.style.backgroundColor = generateColor();
// littleBox2.style.width = '50px';
// littleBox2.style.height = '50px';
// box.append(littleBox2);

// let littleBox3 = document.createElement('div');
// littleBox3.style.backgroundColor = generateColor();
// littleBox3.style.width = '50px';
// littleBox3.style.height = '50px';
// box.append(littleBox3);

// let littleBox4 = document.createElement('div');
// littleBox4.style.backgroundColor = generateColor();
// littleBox4.style.width = '50px';
// littleBox4.style.height = '50px';
// box.append(littleBox4);

// let littleBox5 = document.createElement('div');
// littleBox5.style.backgroundColor = generateColor();
// littleBox5.style.width = '50px';
// littleBox5.style.height = '50px';
// box.append(littleBox5);

// let littleBox6 = document.createElement('div');
// littleBox6.style.backgroundColor = generateColor();
// littleBox6.style.width = '50px';
// littleBox6.style.height = '50px';
// box.append(littleBox6);

// let littleBox7 = document.createElement('div');
// littleBox7.style.backgroundColor = generateColor();
// littleBox7.style.width = '50px';
// littleBox7.style.height = '50px';
// box.append(littleBox6);

// let littleBox8 = document.createElement('div');
// littleBox8.style.backgroundColor = generateColor();
// littleBox8.style.width = '50px';
// littleBox8.style.height = '50px';
// box.append(littleBox8);

// let littleBox9 = document.createElement('div');
// littleBox9.style.backgroundColor = generateColor();
// littleBox9.style.width = '50px';
// littleBox9.style.height = '50px';
// box.append(littleBox9);

// let littleBox10 = document.createElement('div');
// littleBox10.style.backgroundColor = generateColor();
// littleBox10.style.width = '50px';
// littleBox10.style.height = '50px';
// box.append(littleBox10);

// let littleBox11 = document.createElement('div');
// littleBox11.style.backgroundColor = generateColor();
// littleBox11.style.width = '50px';
// littleBox11.style.height = '50px';
// box.append(littleBox11);

// let littleBox12 = document.createElement('div');
// littleBox12.style.backgroundColor = generateColor();
// littleBox12.style.width = '50px';
// littleBox12.style.height = '50px';
// box.append(littleBox12);

// let littleBox13 = document.createElement('div');
// littleBox13.style.backgroundColor = generateColor();
// littleBox13.style.width = '50px';
// littleBox13.style.height = '50px';
// box.append(littleBox13);

// let littleBox14 = document.createElement('div');
// littleBox14.style.backgroundColor = generateColor();
// littleBox14.style.width = '50px';
// littleBox14.style.height = '50px';
// box.append(littleBox14);

// let littleBox15 = document.createElement('div');
// littleBox15.style.backgroundColor = generateColor();
// littleBox15.style.width = '50px';
// littleBox15.style.height = '50px';
// box.append(littleBox15);

// let littleBox16 = document.createElement('div');
// littleBox16.style.backgroundColor = generateColor();
// littleBox16.style.width = '50px';
// littleBox16.style.height = '50px';
// box.append(littleBox16);

// let littleBox17 = document.createElement('div');
// littleBox17.style.backgroundColor = generateColor();
// littleBox17.style.width = '50px';
// littleBox17.style.height = '50px';
// box.append(littleBox17);

// let littleBox18 = document.createElement('div');
// littleBox18.style.backgroundColor = generateColor();
// littleBox18.style.width = '50px';
// littleBox18.style.height = '50px';
// box.append(littleBox18);

// let littleBox19 = document.createElement('div');
// littleBox19.style.backgroundColor = generateColor();
// littleBox19.style.width = '50px';
// littleBox19.style.height = '50px';
// box.append(littleBox19);

// let littleBox20 = document.createElement('div');
// littleBox20.style.backgroundColor = generateColor();
// littleBox20.style.width = '50px';
// littleBox20.style.height = '50px';
// box.append(littleBox20);

// let littleBox21 = document.createElement('div');
// littleBox21.style.backgroundColor = generateColor();
// littleBox21.style.width = '50px';
// littleBox21.style.height = '50px';
// box.append(littleBox21);

// let littleBox22 = document.createElement('div');
// littleBox22.style.backgroundColor = generateColor();
// littleBox22.style.width = '50px';
// littleBox22.style.height = '50px';
// box.append(littleBox22);

// let littleBox23 = document.createElement('div');
// littleBox23.style.backgroundColor = generateColor();
// littleBox23.style.width = '50px';
// littleBox23.style.height = '50px';
// box.append(littleBox23);

// let littleBox24 = document.createElement('div');
// littleBox24.style.backgroundColor = generateColor();
// littleBox24.style.width = '50px';
// littleBox24.style.height = '50px';
// box.append(littleBox24);

// let littleBox25 = document.createElement('div');
// littleBox25.style.backgroundColor = generateColor();
// littleBox25.style.width = '50px';
// littleBox25.style.height = '50px';
// box.append(littleBox25);