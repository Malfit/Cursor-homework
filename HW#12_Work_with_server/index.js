let container1 = document.querySelector(".Task1_charactersInfo");
let container2 = document.querySelector(".Task2_allPlanets");
let container3 = document.querySelector(".Task3_10Planets");
//-------------------------------------1----------------------------------------------
const getAllPeople = async () =>{
    try{   
        let response = await axios.get("https://swapi.co/api/films/2/");
        let result = [];

        for (let i = 0;i < response.data.characters.length;i ++){
          let resp = await axios.get(response.data.characters[i])
            let characterName = resp.data.name;
            let characterBirthYear = resp.data.birth_year;
            let chracterGender = resp.data.gender;
            result = [...result,[characterName, characterBirthYear, chracterGender]]
        }

        return result;
    }
    catch{
        console.log("error");
        return [];
    }
}


const renderCharacters = (characters) =>{  
    console.log(characters);
    //container1.innerHTML = "";
    characters.forEach(character => {
        console.log(character);    
        let characterDiv = document.createElement('div');
        characterDiv.innerHTML = `${character}`;
        //  characterDiv.style.height = "100px";
        //  characterDiv.style.width = "100px"
        container1.append(characterDiv);  
    })
}

let btnPeople = document.querySelector(".characters-info");
let btnViewPeople = document.createElement("button");
btnViewPeople.textContent = "View characters";
btnPeople.append(btnViewPeople);

btnViewPeople.addEventListener('click',function(){
    getAllPeople().then(renderCharacters);
})
//---------------------------------------------------------------------------------------

//-----------------------------------------2---------------------------------------------

const getPlanets = async () =>{
    try{
        let response = await axios.get("https://swapi.co/api/planets/");
        let fullResult = [response.data.results];
        let nextPage = null;

        while (response.data.next != null){
            nextPage = `${response.data.next}`;
            response = await axios.get(nextPage);
            fullResult = [...fullResult,response.data.results];   
        }

        fullResult = fullResult.flat();
        return fullResult;
    }
    catch{
        console.log("error");
        return [];
    }
}


const renderAllPlanets = (planets) =>{  
    container2.innerHTML = "";
    planets.forEach(planet => {
        const planetDiv = document.createElement('div');
        planetDiv.innerHTML = `${planet.name}  `;
        
        planetDiv.style.height = "20px";
        planetDiv.style.width = "140px";
        //planetDiv.style.background = "blue";
        container2.append(planetDiv);
    })
}

let btnPlanets = document.querySelector(".allPlanets-info");
let btnView = document.createElement("button");
btnView.textContent = "View all planets";
btnPlanets.append(btnView);

btnView.addEventListener('click',function(){
    getPlanets().then(renderAllPlanets);
})
//-------------------------------------------------------------------------------------

//------------------------------------------3------------------------------------------
let currentPage = "https://swapi.co/api/planets/";

const get10Planets = async ()=>{
    try{
        let response = await axios.get(currentPage);
        currentPage = `${response.data.next}`;
        return response.data.results;
    }
    catch{
        console.log("error");
        return [];
    }
}



const renderPlanets = (planets) =>{  
    //container3.innerHTML = ""; 
    planets.forEach(planet => {
        const planetDiv = document.createElement('div');
        planetDiv.innerHTML = `${planet.name}  `;
        container3.append(planetDiv);
    })
}

let btnPlanetInfo = document.querySelector(".tenPlanets-info");
let btnNext = document.createElement("button");
btnNext.textContent = "View next planets";
btnPlanetInfo.append(btnNext);

btnNext.addEventListener('click',function(){
    get10Planets().then(renderPlanets);
})

get10Planets().then(renderPlanets);

 
