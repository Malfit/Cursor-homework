const getPlanets = async () =>{
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

const renderPlanets = (planets) =>{
    const container = document.querySelector(".container");
    console.log('planets: ', planets);
    console.log('container: ', container);
    planets.forEach(planet => {
        const planetDiv = document.createElement('div');
        planetDiv.innerHTML = `${planet.name}  `;
        //planetDiv.style.border = "solid black 1px"
        container.append(planetDiv);
        //console.log(planet.name);
    })
    
}



getPlanets().then(renderPlanets);

 // if (Object.values(response.data.next) != null){
    //     do {response.data.results = [...response.data.results, await axios.get(response.data.next)]}
    //     while (Object.values(response.data.next) == null)
    // }
//<h5> ${human.birth_year} </h5>  
//<h5> ${human.gender} </h5>    