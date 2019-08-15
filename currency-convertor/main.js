const selectCurrency = document.querySelector("#currency");
const priceInput = document.querySelector(".price");
const priceConverter = document.querySelector(".convert_price");

function fetchCurrencies() {
  const apiKey = "7576dc507b6854322178";
  const url = `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`;

  /* return new Promise(resolve => {
    fetch(url)
      .then(response => response.json())
      .then(currency => {
          resolve(currency);
        console.log(currency);
      });
  }); */

  return fetch(url).then(response => response.json());
}

fetchCurrencies().then(availableCurrency => {
  displayCurrency(availableCurrency);
});

function displayCurrency(currency) {
  const allCurrencies = Object.keys(currency.results);
  allCurrencies.forEach(currency => {
    const $option = document.createElement("option");
    $option.textContent = currency;
    selectCurrency.appendChild($option);
  });
}
function renderconvertedCurrency(price, currency, currentCurrency) {
  const apiKey = "7576dc507b6854322178";
  const url = `https://free.currconv.com/api/v7/convert?q=${currentCurrency}_${currency}&compact=ultra&apiKey=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(convert => {
      price = price * convert[`${currentCurrency}_${currency}`];
      renderPrice(priceConverter, price);
    });
}

function renderPrice(priceDiv, price) {
  priceDiv.innerHTML = "";
  priceDiv.innerHTML = price;
}
selectCurrency.addEventListener("change", () => {
  const priceInt = parseFloat(priceInput.value);
  renderconvertedCurrency(priceInt, selectCurrency.value, "EUR");
});
