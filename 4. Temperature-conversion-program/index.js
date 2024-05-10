// Temperature Conversion program

// Celsius radio button
const toCelsius = document.getElementById("celsiusRadio");

// Fahrenheit radio button
const toFahrenheit = document.getElementById("fahrenheitRadio");

// Final result area
let final = document.getElementById("finalResult");

// Input fields
let userInput = document.getElementById("userInput");
let userData = userInput.value;

// Celsius logic

// function button() {

// }

// Submit button
function button() {
  let submitBtn = document.getElementById("submit");
  submitBtn.onclick = function () {
    userData = userInput.value;
    final.textContent = userData;
    userData = Number(userData);
    console.log(typeof userData, userData);
    if (toCelsius.checked) {
      const fahrenheitData = (userData * 9) / 5 + 32;
      final.textContent = `${fahrenheitData}°F`;
    } else if (toFahrenheit.checked) {
      const celsiusData = ((userData - 32) * (5 / 9)).toFixed(2);
      final.textContent = `${celsiusData}°C`;
    } else if (userData == 0) {
      final.textContent = "No Input";
    } else {
      final.textContent = "Select a unit";
    }
  };
}
button();
