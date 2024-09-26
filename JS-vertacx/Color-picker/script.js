// Get all necessary elements
const colorDropdown = document.getElementById('color-dropdown');
const customColorPicker = document.getElementById('custom-color-picker');
const colorBox = document.getElementById('color-box');
const resetBtn = document.getElementById('reset-btn');
const historyList = document.getElementById('history');
const addColorBtn = document.getElementById('add-color-btn');

// Store color history
let colorHistory = [];

// Function to update the color box
function updateColorBox(color) {
    colorBox.style.backgroundColor = color;

    // Add selected color to history
    if (color && !colorHistory.includes(color)) {
        colorHistory.push(color);
        updateColorHistory();
    }
}

// Update color history list
function updateColorHistory() {
    historyList.innerHTML = '';  // Clear the list
    colorHistory.forEach(color => {
        const li = document.createElement('li');
        li.textContent = color;
        li.style.backgroundColor = color;
        historyList.appendChild(li);
    });
}

// Dropdown change event listener
colorDropdown.addEventListener('change', function() {
    const selectedColor = colorDropdown.value;
    updateColorBox(selectedColor);
});

// Custom color input event listener
customColorPicker.addEventListener('input', function() {
    const customColor = customColorPicker.value;
    updateColorBox(customColor);
});

// Reset button event listener
resetBtn.addEventListener('click', function() {
    colorBox.style.backgroundColor = '#ffffff';  // Reset to default
    colorDropdown.value = '';  // Reset dropdown
    customColorPicker.value = '#ffffff';  // Reset custom color picker
});

// Add color button to dynamically add custom colors to the dropdown
addColorBtn.addEventListener('click', function() {
    const newColor = customColorPicker.value;

    // Check if color already exists in the dropdown
    const existingOption = Array.from(colorDropdown.options).find(option => option.value === newColor);
    if (!existingOption) {
        const newOption = document.createElement('option');
        newOption.value = newColor;
        newOption.textContent = newColor;
        colorDropdown.appendChild(newOption);
    }
    updateColorBox(newColor);
});
