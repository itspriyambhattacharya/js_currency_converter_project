# 💱 Currency Converter Web Application

A modern and responsive **Currency Converter Web App** built using **HTML**, **JavaScript (ES6+)**, and **Tailwind CSS (via Flowbite)**. This app allows users to convert any amount from one currency to another using live exchange rates fetched from the **ExchangeRate-API**.

> 📌 Hosted on GitHub: [js_currency_converter_project](https://github.com/itspriyambhattacharya/js_currency_converter_project.git)

---

## 📸 Demo

> [Currency Converter](https://itspriyambhattacharya.github.io/js_currency_converter_project/)

---

## 📂 Folder Structure

```bash
js_currency_converter_project/
├── .gitignore
├── index.html                # Main UI layout
├── LICENSE                   # License information (MIT)
├── package.json              # Project metadata & dependencies
├── package-lock.json         # Dependency lock file
├── vite.config.js            # (Optional - if you're using Vite)
├── dist/                     # Distribution build folder (auto-generated)
├── node_modules/             # Project dependencies (auto-generated)
├── public/                   # Static assets if any
└── src/
    ├── main.js               # JavaScript logic for API interaction and DOM
    └── style.css             # Tailwind CSS input file
```

---

## ✨ Features

- ✅ Real-time currency conversion using live exchange rates
- 🌍 Supports conversion between all global currencies
- 💡 Clean and intuitive UI with dark theme support
- 🚀 Fast and responsive design powered by **Tailwind CSS**
- 🔄 Input validation with user alerts for invalid selections
- ⚙️ Simple to integrate and modify for custom use

---

## 🛠️ Technologies Used

| Category        | Tools / Libraries                                          |
| --------------- | ---------------------------------------------------------- |
| Markup          | HTML5                                                      |
| Styling         | Tailwind CSS (via [Flowbite v3.1.2](https://flowbite.com)) |
| Logic           | JavaScript (ES6+), DOM API                                 |
| API Integration | [ExchangeRate-API](https://www.exchangerate-api.com/)      |
| Build Tool      | [Vite](https://vitejs.dev/) _(Optional, based on setup)_   |

---

## 📜 API Integration

- API Used: [ExchangeRate-API](https://www.exchangerate-api.com/)
- Format:

  ```txt
  https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/{BASE_CURRENCY}
  ```

- Example:

  ```javascript
  const url =
    "https://v6.exchangerate-api.com/v6/f5e69d3255659c4b6fefb7ca/latest/USD";
  ```

> ⚠️ You must replace the public API key with your own API key in production.

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, etc.)
- (Optional) Node.js and npm for using Vite dev server

### Steps to Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/itspriyambhattacharya/js_currency_converter_project.git
   cd js_currency_converter_project
   ```

2. **If you are using static HTML**  
   Simply open `index.html` in your browser.

3. **If you are using Vite (development mode)**

   ```bash
   npm install
   npm run dev
   ```

   Navigate to: `http://localhost:5173`

---

## 🔍 Application Overview

### UI Highlights

- Input:
  - **From Currency**: `<select>` dropdown
  - **Amount**: numeric input
- Output:
  - **To Currency**: `<select>` dropdown
  - **Converted Value**: calculated automatically
- Button:
  - **Convert Currency**: triggers conversion via JavaScript `fetch`

### JavaScript Highlights (`main.js`)

```javascript
submitBtn.addEventListener("click", (e) => {
  const inpSelectVal = inpSelect.value;
  const outSelectVal = outSelect.value;
  let inpVal = Number(inpField.value);

  if (invalid inputs...) {
    alert("Please select valid currencies and enter a valid amount.");
    return;
  }

  convertCurrency(inpSelectVal, outSelectVal, inpVal);
});
```

- Populates dropdowns using:

  ```js
  data.conversion_rates;
  ```

- Calculates conversion as:

  ```js
  result = conversion_rates[to] * amount;
  ```

---

## 📖 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more details.

---

## 🙋‍♂️ Author

**Priyam Bhattacharya**  
M.Sc. Computer Science, University of Calcutta

- 🔗 GitHub: [@itspriyambhattacharya](https://github.com/itspriyambhattacharya)
- 🔗 LinkedIn: [@itspriyambhattacharya](https://www.linkedin.com/in/itspriyambhattacharya/)

---

## 🤝 Contributions

Contributions are welcome and appreciated!

1. Fork the project.
2. Create your feature branch:

   ```bash
   git checkout -b feature/my-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Added feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/my-feature
   ```

---

## 📌 Future Improvements (Ideas)

- Add loading spinner while fetching exchange data
- Show historical exchange trends via chart.js
- Add multiple language support
