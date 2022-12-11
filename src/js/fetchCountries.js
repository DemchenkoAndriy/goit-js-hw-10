import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRefs } from './getRefs.js';


const refs = getRefs();

export function fetchCountries(name) {
 reloadRender();
  if (name==="") {
    return;
  }
  
fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
     
      if (!response.ok) {
      
      throw response.status;
    }
    return response.json();
  })
    .then(arrayСountries => {
      console.log(arrayСountries);
        if (arrayСountries.length > 10) { 
            Notify.info("Too many matches found. Please enter a more specific name.");
          return;
        } else if (arrayСountries.length <= 10 && arrayСountries.length >= 2) {
          
           rendersManyCountries(arrayСountries);
        } else  {
          
          renderOneCountry(arrayСountries[0])
          
}
     
 
  })
  .catch(error => {
     
if (error=== 404) {
 Notify.failure("Oops, there is no country with that name");
}
     
  });


}

function rendersManyCountries(arrayСountries) {
   
  refs.countryList.innerHTML = arrayСountries.map(coun => 
    
    `<li>
    
        <img
          width="20"
          src="${coun.flags.svg}"
          alt="${coun.name.official}"
        />
        ${coun.name.official}
      </li>`

  );
  
}

function renderOneCountry(coun) {
    
 refs.countryInfo.innerHTML = `
<img
          width="100"
          src="${coun.flags.svg}"
          alt="${coun.name.official}"
        />
        <h1> ${coun.name.official}</h1>
      <p class="country-info-key">Capital: <span  class="country-info-value">${coun.capital[0]}</span></p>
      <p class="country-info-key">Population: <spanc class="country-info-value">${coun.population}</span></p>
      <p class="country-info-key">Language: <span class="country-info-value">${Object.values(coun.languages)}</span></p>`



}

function reloadRender() {
  refs.countryInfo.innerHTML = "";
  refs.countryList.innerHTML = "";
}


