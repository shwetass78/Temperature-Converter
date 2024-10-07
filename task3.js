function convertTemperature() {
  const inputTemp = document.getElementById("inputTemp").value;
  const unitSelect = document.getElementById("unitSelect").value;
  const resultDisplay = document.getElementById("resultDisplay");

  if (isNaN(inputTemp) || inputTemp === "") {
    resultDisplay.textContent = "Please enter a valid number!";
    return;
  }

  let temp = parseFloat(inputTemp);
  let result = 0;
  let unit = "";

  // Conversion logic based on selected unit
  if (unitSelect === "Celsius") {
    result = `Fahrenheit:${((temp * 9) / 5 + 32).toFixed(2)}°F, Kelvin: ${(
      temp + 273.15
    ).toFixed(2)}K`;
  } else if (unitSelect === "Fahrenheit") {
    result = `Celsius:${(((temp - 32) * 5) / 9).toFixed(2)}°C, Kelvin: ${(
      ((temp - 32) * 5) / 9 +
      273.15
    ).toFixed(2)}K`;
  } else if (unitSelect === "Kelvin") {
    result = `Celsius: ${(temp - 273.15).toFixed(2)}°C, Fahrenheit: ${(
      ((temp - 273.15) * 9) / 5 +
      32
    ).toFixed(2)}°F`;
  }

  resultDisplay.textContent = result;
}
