function fetchingApi(){
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(res => {
    const html = res.map(country =>
      //console.log(country)
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
}
fetchingApi()

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(res => {
  //console.log(res)
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
   const sortByRegion = res.sort((a, b) => {
    const regionA = a.region.toUpperCase();
    const regionB = b.region.toUpperCase();
    if(regionA < regionB){
      return -1
    }
    if(regionA > regionB){
      return 1
    }
    else{
      return 0
    }
   })
  //console.log("working",sortByRegion)
  const sortByPopulation = res.sort((a, b) => {
    const populationA = a.population;
    const populationB = b.population;
    if(a < b){
      return -1
    }
    if(a > b){
      return 1
    }
    else{
      return 0
    }
  })
  //console.log("pop",sortByPopulation)
})
.catch(error => console.log("Error",error))

