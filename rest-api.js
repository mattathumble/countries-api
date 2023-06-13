const loadCountryAPI = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        displayCountries(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  
  const displayCountries = countries => {
    console.log(countries);
    const countriesHTML = countries.map(country => getCountry(country));
    const container = document.getElementById('list');
    container.innerHTML = countriesHTML.join(' ');
  
    const showButtons = document.querySelectorAll(".show-info");
    const containers = document.querySelectorAll(".more-info-block");
  
    showButtons.forEach((button, index) => {
      button.addEventListener("click", function() {
        containers[index].classList.toggle("hidden");
      });
    });
  };
  
  const getCountry = (country) => {
    console.log(country);
    return `
      <div class="row-item">
        <img src="${country.flags.png}" width="50px" height="auto"></img>
        <div class="name-learn-more">
          <p class="country-name">
            ${country.name.common}
          </p>
          <button class="show-info">Show information</button>
        </div>
      </div>
      <div class="more-info-block hidden">
        <p>
          Alternative spelling: ${country.altSpellings}
        </p>
        <p>
          Area: ${country.area}
        </p>
        <p>
          Borders: ${country.borders}
        </p>
        <p>
          Capital: ${country.capital}
        </p>
        <div style="display: flex; flex-direction: row; gap: 20px">
            <p>Coat of Arms:</p>
            <img src="${country.coatOfArms.png}" width="50px"></img>
        </div>
        <p>
          Continents: ${country.continents}
        </p>
        <p>
          Currencies: ${country.currencies}
        </p>
        <p>
          Languages: ${country.languages}
        </p>
        <p>
          Official Name: ${country.name.official}
        </p>
        <p>
          Population: ${country.population}
        </p>
        <p>
          Start of Week: ${country.startOfWeek}
        </p>
        <p>
          Subregion: ${country.subregion}
        </p>
        <p>
          Timezones: ${country.timezones}
        </p>
      </div>
    `;
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    loadCountryAPI();
  });
  