
import imageSize from 'image-size'

console.log(imageSize);


// const resultsDiv =ize document.getElementById('results');

// Using the imported functions and constant
// const sum = ipdi.add(10, 5);
// const difference = ipdi.sub(10, 5);

// resultsDiv.innerHTML = `
//     <p>PI: ${ipdi.PI}</p>
//     <p>Sum: ${sum}</p>
//     <p>Difference: ${difference}</p>

// `;

imageSize("./computer.png", function (err, dimensions) {
  console.log(dimensions.width, dimensions.height)
})


console.log(imageSize);





