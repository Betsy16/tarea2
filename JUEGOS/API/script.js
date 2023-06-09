fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {



    const countryContainer = document.getElementById('country-container');
    data.forEach(country => {
      const card = createCountryCard(country);
      countryContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.log('An error occurred while fetching the country data:', error);
  });


  
function createCountryCard(country) {
  const card = document.createElement('div');
  card.classList.add('country-card');

  if (country.flags && country.flags.png) {
    const image = document.createElement('img');
    image.src = country.flags.png;
    image.alt = country.name.common;
    card.appendChild(image);
  }

  const content = document.createElement('div');
  content.classList.add('country-card-content');
  card.appendChild(content);

  const name = document.createElement('h2');
  name.classList.add('country-name');
  name.textContent = country.name.common;
  content.appendChild(name);

  const details = document.createElement('div');
  details.classList.add('country-details');
  content.appendChild(details);

  const population = document.createElement('p');
  population.innerHTML = `<span>Population:</span> ${country.population}`;
  details.appendChild(population);

  const region = document.createElement('p');
  region.innerHTML = `<span>Region:</span> ${country.region}`;
  details.appendChild(region);

  const capital = document.createElement('p');
  capital.innerHTML = `<span>Capital:</span> ${country.capital && country.capital[0]}`;
  details.appendChild(capital);

  const languages = document.createElement('p');
  languages.innerHTML = `<span>Languages:</span> ${Object.values(country.languages).join(', ')}`;
  details.appendChild(languages);

  const currencies = document.createElement('p');
  currencies.innerHTML = `<span>Currencies:</span> ${Object.values(country.currencies).join(', ')}`;
  details.appendChild(currencies);

  const button = document.createElement('button');
  button.classList.add('country-button');
  button.textContent = 'Ver más';
  button.addEventListener('click', () => {
    details.classList.toggle('visible');
    button.textContent = details.classList.contains('visible') ? 'Ver menos' : 'Ver más';
  });
  content.appendChild(button);

  return card;
}
