const currencySelection = document.querySelector("#currency");
function fetchCurrencies(){
    const apiKey = '7576dc507b6854322178';
    const token = `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`;
    fetch(token)
    .then(response => response.json())
    .then(json => displayCurrency(json));
}
fetchCurrencies();

function displayCurrency(currency){
    const allCurrencies = Object.keys(currency.results);
    allCurrencies.forEach(currency =>{
        const optionTag = document.createElement("option");
        optionTag.textContent = currency;
        currencySelection.appendChild(optionTag);
    })

} 
