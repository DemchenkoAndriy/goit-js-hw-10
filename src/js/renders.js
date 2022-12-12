
import { getRefs } from './getRefs.js';



const refs = getRefs();

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


export {reloadRender,rendersManyCountries,renderOneCountry};