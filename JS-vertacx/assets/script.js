function calculateDiscountedPrice(price = 0, discount = 0) {
    // Calculate the discounted price
    const discountedPrice = price - (price * (discount / 100));

    // Display the result
    document.getElementById('result').innerText = `Final Price: $${discountedPrice.toFixed(2)}`;
}

// Function to handle the button click
function handleClick() {
    // Get values from input fields
    const price = parseFloat(document.getElementById('price').value);
    const discount = parseFloat(document.getElementById('discount').value);

    // Check if discount is not provided, use default value
    calculateDiscountedPrice(price, isNaN(discount) ? 0 : discount);
}


