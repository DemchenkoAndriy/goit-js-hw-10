import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { rendersManyCountries,renderOneCountry } from './renders';


export function fetchCountries(name) {

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




