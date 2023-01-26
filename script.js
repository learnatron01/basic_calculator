var display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function backspace() {
  var value = display.value;
  display.value = value.substring(0, value.length - 1);
}

function addToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    var result = eval(display.value);
    display.value = result;
  } catch(err) {
    display.value = "Error";
  }
}
