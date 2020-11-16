const dataRow = document.querySelector("#data-row");
const loadingIcon = document.querySelector(".loading");
const error = document.querySelector(".error");

fetch("https://restcountries.eu/rest/v2/all")
.then((res) => res.json())
.then((data) => {
    loadingIcon.style.display = "none";
    data.forEach(country => {
        dataRow.innerHTML += `<div class="col-11 col-lg-3 col-md-6 col-sm-6">
            <div class="country mx-auto">
                <img src=${country.flag} alt="country-img" class="country-img">
                <div class="country-details p-3">
                    <h5 class="country-title mt-2 mb-2">${country.name}</h5>
                    <p class="my-1"><strong>Population: </strong>${country.population.toLocaleString()}</p>
                    <p class="my-1"><strong>Region: </strong>${country.region}</p>
                    <p class="my-1"><strong>Capital: </strong>${country.capital}</p>
                </div>
            </div>
        </div>`
    });
})
.catch((err) => {
    loadingIcon.style.display = "none";
    error.innerHTML = `<h4>ERROR: ${err.message} data. Check your internet connection.</h4>`;
})
