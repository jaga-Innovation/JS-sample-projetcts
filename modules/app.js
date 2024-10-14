// app.js

import { PI, add, subtract } from './mathUtils.js';

const resultsDiv = document.getElementById('results');

// Using the imported functions and constant
const sum = add(10, 5);
const difference = subtract(10, 5);

resultsDiv.innerHTML = `
    <p>PI: ${PI}</p>
    <p>Sum: ${sum}</p>
    <p>Difference: ${difference}</p>

`;
