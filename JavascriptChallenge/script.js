const colorMap = {
  '1': 'red',
  '2': 'green',
  '3': 'blue',
  '4': 'yellow',
  '5': 'cyan',
  '6': 'magenta',
  '7': 'orange',
  '8': 'purple',
  '9': 'dark-blue',
};

function updateColor() {
  const numberInput = document.getElementById('numberInput');
  const colorOutput = document.getElementById('colorOutput');
  const colorText = document.getElementById('colorText');

  // Get the selected number
  const selectedNumber = parseInt(numberInput.value);

  // Get the corresponding color
  const selectedColor = colorMap[selectedNumber];

  // Update the color box and text
  colorOutput.className = 'color-box ' + selectedColor;
  colorText.innerText = 'The color for ' + selectedNumber + ' is ' + selectedColor;
}

function showColor() {
  const numberInput = document.getElementById('numberInput');
  const sphere = document.getElementById('sphere');

  // Get the selected number
  const selectedNumber = parseInt(numberInput.value);

  // Get the corresponding color
  const selectedColor = colorMap[selectedNumber];

  // Update the sphere color
  sphere.className = 'sphere ' + selectedColor;
}
