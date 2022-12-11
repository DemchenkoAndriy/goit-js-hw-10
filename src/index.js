import './css/styles.css';
import { getRefs } from './js/getRefs.js';
import { fetchCountries } from './js/fetchCountries.js';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const refs = getRefs();

const searchBox = refs.searchBox;
searchBox.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(e) {
    console.log(e);
    fetchCountries(e.target.value.trim())
     
};

// console.log(e.currentTarget.value);
    
