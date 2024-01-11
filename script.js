function updateTemperature() {
    let sliderValue = document.getElementById("temperatureSlider").value;
    document.getElementById("temperature").value = sliderValue;
  }
  
  function updateSlider() {
    let inputValue = parseFloat(document.getElementById("temperature").value);
    if (!isNaN(inputValue)) {
      document.getElementById("temperatureSlider").value = inputValue;
    }
  }
  
  function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let resultElement = document.getElementById("result");
    let converterContainer = document.querySelector(".converter-container");
  
    if (isNaN(temperature)) {
      resultElement.innerText = "Please enter a valid number.";
      return;
    }
  
    let convertedTemperature;
    let convertedUnit;
  
    switch (unit) {
      case "celsius":
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = "Fahrenheit";
        break;
      case "fahrenheit":
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = "Celsius";
        break;
      case "kelvin":
        convertedTemperature = temperature + 273.15;
        convertedUnit = "Kelvin";
        break;
      default:
        break;
    }
  
    resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
  
    // Add animation to result display
    resultElement.style.opacity = 1;
    resultElement.style.transform = "translateY(0)";
  
    // Add animation to converter container
    converterContainer.style.transform = "rotate(5deg)";
    setTimeout(() => {
      converterContainer.style.transform = "rotate(0)";
    }, 300);
  }
  