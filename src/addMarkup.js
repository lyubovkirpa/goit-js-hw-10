function createSimpleMarkup({ flags, name }) {
  return `<li class="country-item">
      <img
        class="country-flag"
        src="${flags.svg}"
        width="60px"
        height="40px"
      />
      <p class="country-name">${name.official}</p>
    </li>`;
}

function createDetailMarkup({ flags, name, capital, population, languages }) {
  const langStr = Object.values(languages).join(', ');

  return ` 
    <div class="country-item">
    <img class="country-flag" width="60px" height="40px" src="${flags.svg}"></img>
    <p class="country-name accent">${name.official}</p></div>
    <div class="description">
    <p class="description__name">Capital: <span class="description__second-name" >${capital}</span><p>
    <p class="description__name">Population: <span class="description__second-name">  ${population}</span></p>
    <p class="description__name">Languages: <span class="description__second-name" >${langStr}</span></p>
    </div>`;
}

export { createSimpleMarkup, createDetailMarkup };
