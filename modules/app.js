// Import lodash
import _ from 'lodash';

// Function to chunk the array
function chunkArray() {
    const numbersInput = document.getElementById('numbersInput').value;
    const chunkSize = parseInt(document.getElementById('chunkSizeInput').value, 10);

    if (!numbersInput || isNaN(chunkSize) || chunkSize <= 0) {
        document.getElementById('result').innerText = 'Please enter valid numbers and chunk size.';
        return;
    }

    // Convert the string input to an array of numbers
    const numbersArray = numbersInput.split(',').map(Number);

    // Use lodash to chunk the array
    const chunkedArray = _.chunk(numbersArray, chunkSize);

    // Display the result
    document.getElementById('result').innerText = `Chunked Array: ${JSON.stringify(chunkedArray)}`;
}

// Event listener for button
document.getElementById('chunkButton').addEventListener('click', chunkArray);
