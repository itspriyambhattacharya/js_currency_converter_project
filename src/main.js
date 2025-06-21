import "./style.css";

const inpSelect = document.querySelector("#in-countries");
const outSelect = document.querySelector("#out-countries");
const inpField = document.querySelector("#in-amount");
const outField = document.querySelector("#out-amount");
const submitBtn = document.querySelector(`button[type="button"]`);

console.log(inpSelect);
console.log(outSelect);
let inpVal = undefined; // to store the input value

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
      optionElemInp.value = key;

      optionElemOut.innerHTML = key;
      optionElemOut.value = key;
      inpSelect.appendChild(optionElemInp);
      outSelect.appendChild(optionElemOut);
    }
  } catch (err) {
    console.log(`Error occured while fetching: ${err}`);
  }
}
// currencyConverter();

submitBtn.addEventListener("click", (e) => {
  const inpSelectVal = inpSelect.value;
  const outSelectVal = outSelect.value;
  inpVal = inpField.value;
  console.log(inpVal);
});
