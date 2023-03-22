import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createSimpleMarkup, createDetailMarkup } from './addMarkup';

const inputCountry = document.querySelector('#search-box');
const listCountry = document.querySelector('.country-list');
const infoCountry = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

inputCountry.addEventListener('input', debounce(onInputVaries, DEBOUNCE_DELAY));

let inputValue = '';

function renderSimpleMarkup(data) {
  const markup = data.map(createSimpleMarkup).join('');
  listCountry.innerHTML = markup;
}

function renderDetailMarkup(data) {
  const markup = data.map(createDetailMarkup).join('');
  infoCountry.innerHTML = markup;
}

function onInputVaries(evt) {
  clearCountryInfo();
  inputValue = evt.target.value.trim().toLowerCase();

  if (!inputValue) {
    return;
  }
  fetchCountries(inputValue)
    .then(data => {
      if (data.length === 1) {
        renderDetailMarkup(data);
      } else if (data.length >= 2 && data.length <= 10) {
        renderSimpleMarkup(data);
      } else {
        onManyCoincidences();
      }
    })
    .catch(onShowError);
}

function clearCountryInfo() {
  listCountry.innerHTML = '';
  infoCountry.innerHTML = '';
}

function onManyCoincidences() {
  return Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

function onShowError() {
  return Notify.failure('Oops, there is no country with that name');
}
