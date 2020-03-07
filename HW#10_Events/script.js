let keyQ = document.getElementById('81');
let keyW = document.getElementById('87');
let keyE = document.getElementById('69');
let keyR = document.getElementById('82');
let keyT = document.getElementById('84');
let keyY = document.getElementById('89');
let keyU = document.getElementById('85');
let keyI = document.getElementById('73');
let keyO = document.getElementById('79');

//i can't create here objects for audio, because speed of playing is less

//-----------------------------actions for keydown---------------------------------------------------------
document.addEventListener('keydown',function(event){
    switch (event.keyCode) {
        case 81:
            console.log('Q');
            let myAudioQ = new Audio('sounds/q.mp3');
            keyQ.style.fontSize = "32px";
            setTimeout(()=> keyQ.style.fontSize ="30px",100);
            myAudioQ.play();
            keyQ.classList.add("boxHover");
            setTimeout(()=> keyQ.classList.remove("boxHover"),100);
             break;
        case 87:
            console.log('W');
            let myAudioW = new Audio('sounds/w.mp3');
            keyW.style.fontSize = "32px";
            setTimeout(()=> keyW.style.fontSize ="30px",100);
            myAudioW.play();
            keyW.classList.add("boxHover");
            setTimeout(()=> keyW.classList.remove("boxHover"),100);
            break;
        case 69:
            console.log('E');
            let myAudioE = new Audio('sounds/e.mp3');
            keyE.style.fontSize = "32px";
            setTimeout(()=> keyE.style.fontSize ="30px",100);
            myAudioE.play();
            keyE.classList.add("boxHover");
            setTimeout(()=> keyE.classList.remove("boxHover"),100);
            break;
        case 82:
            console.log('R');
            let myAudioR = new Audio('sounds/r.mp3');
            keyR.style.fontSize = "32px";
            setTimeout(()=> keyR.style.fontSize ="30px",100);
            myAudioR.play();
            keyR.classList.add("boxHover");
            setTimeout(()=> keyR.classList.remove("boxHover"),100);
            break;
        case 84:
            console.log('T');
            let myAudioT = new Audio('sounds/t.mp3');
            keyT.style.fontSize = "32px";
            setTimeout(()=> keyQ.style.fontSize ="30px",100);
            myAudioT.play();
            keyT.classList.add("boxHover");
            setTimeout(()=> keyT.classList.remove("boxHover"),100);
            break;
        case 89:
            console.log('Y');
            let myAudioY = new Audio('sounds/y.mp3');
            keyY.style.fontSize = "32px";
            setTimeout(()=> keyY.style.fontSize ="30px",100);
            myAudioY.play();
            keyY.classList.add("boxHover");
            setTimeout(()=> keyY.classList.remove("boxHover"),100);
            break;
        case 85:
            console.log('U');
            let myAudioU = new Audio('sounds/u.mp3');
            keyU.style.fontSize = "32px";
            setTimeout(()=> keyU.style.fontSize ="30px",100);
            myAudioU.play();
            keyU.classList.add("boxHover");
            setTimeout(()=> keyU.classList.remove("boxHover"),100);
            break;
        case 73:
            console.log('I');
            let myAudioI = new Audio('sounds/i.mp3');
            keyI.style.fontSize = "32px";
            setTimeout(()=> keyI.style.fontSize ="30px",100);
            myAudioI.play();
            keyI.classList.add("boxHover");
            setTimeout(()=> keyI.classList.remove("boxHover"),100);
            break;
        case 79:
            console.log('O');
            let myAudioO = new Audio('sounds/o.mp3');
            keyO.style.fontSize = "32px";
            setTimeout(()=> keyO.style.fontSize ="30px",100);
            myAudioO.play();
            keyO.classList.add("boxErrorHover");
            setTimeout(()=> keyO.classList.remove("boxErrorHover"),100);
            break;
        default:
          console.log( "another one" );
      }
    })
//------------------------------------------------------------------------------------------------

//--------------------------------------actions for click------------------------------------------
    keyQ.addEventListener('click',function(){
        let myAudioClickQ = new Audio('sounds/q.mp3');
        keyQ.style.fontSize = "32px";
        setTimeout(()=> keyQ.style.fontSize ="30px",100);
        myAudioClickQ.play();
        keyQ.classList.add("boxHover");
        setTimeout(()=> keyQ.classList.remove("boxHover"),100);
    })

        keyW.addEventListener('click',function(){
        let myAudioClickW = new Audio('sounds/w.mp3');
        keyW.style.fontSize = "32px";
        setTimeout(()=> keyW.style.fontSize ="30px",100);
        myAudioClickW.play();
        keyW.classList.add("boxHover");
        setTimeout(()=> keyW.classList.remove("boxHover"),100);
    })

    keyE.addEventListener('click',function(){
        let myAudioClickE = new Audio('sounds/e.mp3');
        keyE.style.fontSize = "32px";
        setTimeout(()=> keyE.style.fontSize ="30px",100);
        myAudioClickE.play();
        keyE.classList.add("boxHover");
        setTimeout(()=> keyE.classList.remove("boxHover"),100);
    })

    keyR.addEventListener('click',function(){
        let myAudioClickR = new Audio('sounds/r.mp3');
        keyR.style.fontSize = "32px";
        setTimeout(()=> keyR.style.fontSize ="30px",100);
        myAudioClickR.play();
        keyR.classList.add("boxHover");
        setTimeout(()=> keyR.classList.remove("boxHover"),100);
    })

    keyT.addEventListener('click',function(){
        let myAudioClickT = new Audio('sounds/t.mp3');
        keyT.style.fontSize = "32px";
        setTimeout(()=> keyT.style.fontSize ="30px",100);
        myAudioClickT.play();
        keyT.classList.add("boxHover");
        setTimeout(()=> keyT.classList.remove("boxHover"),100);
    })

    keyY.addEventListener('click',function(){
        let myAudioClickY = new Audio('sounds/y.mp3');
        keyY.style.fontSize = "32px";
        setTimeout(()=> keyY.style.fontSize ="30px",100);
        myAudioClickY.play();
        keyY.classList.add("boxHover");
        setTimeout(()=> keyY.classList.remove("boxHover"),100);
    })

    keyU.addEventListener('click',function(){
        let myAudioClickU = new Audio('sounds/u.mp3');
        keyU.style.fontSize = "32px";
        setTimeout(()=> keyU.style.fontSize ="30px",100);
        myAudioClickU.play();
        keyU.classList.add("boxHover");
        setTimeout(()=> keyU.classList.remove("boxHover"),100);
    })

    keyI.addEventListener('click',function(){
        let myAudioClickI = new Audio('sounds/i.mp3');
        keyI.style.fontSize = "32px";
        setTimeout(()=> keyI.style.fontSize ="30px",100);
        myAudioClickI.play();
        keyI.classList.add("boxHover");
        setTimeout(()=> keyI.classList.remove("boxHover"),100);
    })

    keyO.addEventListener('click',function(){
        let myAudioClickO = new Audio('sounds/o.mp3')
        keyO.style.fontSize = "32px";
        setTimeout(()=> keyO.style.fontSize ="30px",100);
        myAudioClickO.play();
        keyO.classList.add("boxErrorHover");
        setTimeout(()=> keyO.classList.remove("boxErrorHover"),100);
    })
//-----------------------------------------------------------------------------

