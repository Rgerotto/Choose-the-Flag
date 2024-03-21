/* 

    //ESTA FUNCIONANDO//

fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
.then(response => response.json())
.then(res => {
    const ApiDataPokemon = res.results;
    let line = '';
    let fetchPromises = [];
    ApiDataPokemon.forEach(results => {
        let url = results.url;
        fetchPromises.push(
            fetch(url)
            .then(response => response.json())
            .then(function(pokeData) {
                line += `<div class="card" onclick="myFunction()">
                <h2>${pokeData.species.name}</h2>
                <img src=${pokeData.sprites.front_default}>
                <span>Type: ${pokeData.types[0].type.name}</span>
                </div>`;
                //console.log(pokeData)
                console.log("testando", pokeData)
            })
        );
    });
    Promise.all(fetchPromises)
    .then(() =>{
        document.getElementById('container').innerHTML = line;
    })
    .catch(error => console.log(error))
})
.catch(error => console.log(error)) */
/* 
fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(res => {
    const details = res.map(country => 
        `<div class="card">
        <img src=${country.flags.svg}>
        <h2> ${country.name.official}</h2>
        <p>${country.capital}</p>
        </div>`)
        .sort((a, b) =>{
            const nameA = a.querySelector('h2').textContent.toUpperCase();
            const nameb = b.querySelector('h2').textContent.toUpperCase();
            if(nameA < nameb){
                return -1
            }
            if(nameA > nameb){
                return 1
            }
            return 0
        }).join('')
    document.getElementById('container').innerHTML = details;
    console.log(res)
    //flags.svg
})
.catch(error => console.log(error)) */




/* fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(res => {
    const sortByName = res.sort((a, b) =>{
        const nameA = a.name.official.toUpperCase();
        const nameB = b.name.official.toUpperCase();
        if(nameA < nameB){
            return -1
        }
        if(nameA > nameB){
            return 1
        }
        return 0
    });
    const html = sortByName.map(country => 
        //console.log(country)
        `<div class="card">
        <img src=${country.flags.svg}>
      </div>`).join('');
    
    document.getElementById('container').innerHTML = html;
        
})
.catch(error => console.log(error)) */

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(res => {
    const sortByName = res.sort((a, b) =>{
      const nameA = a.name.official.toUpperCase();
      const nameB = b.name.official.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const html = sortByName.map(country =>
        //console.log(country.population)
      `<div class="card">
        <img src=${country.flags.svg} 
             data-description="${country.name.official}"
             data-capital="${country.capital}"
             data-population="${country.population}"
             data-region="${country.region}"
             data-flag="${country.flag}">
      </div>`
    ).join('');

    document.getElementById('container').innerHTML = html;

    // Add event listener to each image
    const images = document.querySelectorAll('.card img');
    images.forEach(image => {
      image.addEventListener('click', () => {
        const description = image.getAttribute('data-description');
        const capital = image.getAttribute('data-capital');
        const population = image.getAttribute('data-population');
        const region = image.getAttribute('data-region');
        const flag = image.getAttribute('data-flag');
        // Replace this alert with your custom popup logic
        let popUp = document.getElementById('container-popup');
        popUp.classList.add('container-popup')
        popUp.classList.remove('hidden');

        const nameOfficial = document.createElement('p')
        nameOfficial.innerHTML = `<div class="card-description">
                                <p>${flag}</p>
                                <p>Name: ${description}</p>
                                <p>Capital: ${capital}</p>
                                <p>Population: ${population}</p>
                                <p>Region: ${region}</p>
                                <button id="close">X</button>
                                </div>`
        popUp.innerHTML = '';
        popUp.appendChild(nameOfficial)

        const closePop = document.getElementById('close');
        closePop.addEventListener('click', () => {
            popUp.classList.add('hidden')
        })
      });
    });
  })
  .catch(error => console.log(error));

