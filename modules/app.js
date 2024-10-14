// app.js

import ipdi from './mathUtils.js';

import axios from 'axios'

const resultsDiv = document.getElementById('results');

// Using the imported functions and constant
const sum = ipdi.add(10, 5);
const difference = ipdi.sub(10, 5);

resultsDiv.innerHTML = `
    <p>PI: ${ipdi.PI}</p>
    <p>Sum: ${sum}</p>
    <p>Difference: ${difference}</p>

`;




