
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia continent
    const asiaCountries = data.filter(country => country.region === "Asia");

    // Log the list of countries from Asia
    console.log("Countries from Asia:", asiaCountries);
  })
  .catch(error => console.log("Error fetching data:", error));
