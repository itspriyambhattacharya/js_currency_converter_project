import "./style.css";

const inpSelect = document.querySelector("#in-countries");
const outSelect = document.querySelector("#out-countries");
console.log(inpSelect);
console.log(outSelect);

async function currencyConverter() {
  const url = `https://v6.exchangerate-api.com/v6/f5e69d3255659c4b6fefb7ca/latest/USD`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    for (const key in data.conversion_rates) {
      const optionElem = document.createElement("option");
      optionElem.innerHTML = key;
      inpSelect.appendChild(optionElem);
    }
  } catch (err) {
    console.log(`Error occured while fetching: ${err}`);
  }
}

// currencyConverter();
