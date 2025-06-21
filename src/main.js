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
      const optionElemInp = document.createElement("option");
      const optionElemOut = document.createElement("option");
      optionElemInp.innerHTML = key;
      optionElemOut.innerHTML = key;
      inpSelect.appendChild(optionElemInp);
      outSelect.appendChild(optionElemOut);
    }
  } catch (err) {
    console.log(`Error occured while fetching: ${err}`);
  }
}

// currencyConverter();
