import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { debounse } from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

const inputCountry = document.querySelector('input');
const listCountry = document.querySelector('.country-list');
const infoCountry = document.querySelector('.country-info');

inputCountry.addEventListener(
  'input',
  debounse(onInputCountry, DEBOUNCE_DELAY)
);

function onInputCountry(e) {
  const countryName = e.target.value.trim();
  if (countryName !== '') {
    deleteSymbol();
  }
}

function deleteSymbol() {
  listCountry.innerHTML = '';
  infoCountry.innerHTML = '';
}
