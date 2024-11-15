// References to the buttons and the dynamic product list container
const addItemForm = document.getElementById('item-form');
const removeItemBtn = document.getElementById('remove-item-btn');
const dynamicProductList = document.querySelector('.product-list');

// Function to create a product item dynamically
function createProductItem(title, price, imageURL) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    const productImg = document.createElement('img');
    productImg.src = imageURL;
    productImg.alt = title;

    const productName = document.createElement('h3');
    productName.textContent = title;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${price}`;

    const productQuantityLabel = document.createElement('label');
    productQuantityLabel.setAttribute('for', 'quantity');
    productQuantityLabel.textContent = 'Quantity:';

    const productQuantityInput = document.createElement('input');
    productQuantityInput.type = 'number';
    productQuantityInput.min = '1';
    productQuantityInput.value = '1';

    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';

    // Append all elements to the product div
    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productQuantityLabel);
    productDiv.appendChild(productQuantityInput);
    productDiv.appendChild(addToCartBtn);

    return productDiv;
}

// Handle form submission to add new item
addItemForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload on form submission

    // Get form values
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const imageFile = document.getElementById('image').files[0];

    if (imageFile) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageURL = e.target.result;
            const productItem = createProductItem(title, price, imageURL);
            dynamicProductList.appendChild(productItem);

            // Clear the form after adding the item
            addItemForm.reset();
        }

        reader.readAsDataURL(imageFile);
    } else {
        alert('Please upload an image.');
    }
});

// Function to remove the last added product
removeItemBtn.addEventListener('click', () => {
    const lastProduct = dynamicProductList.lastElementChild;
    if (lastProduct) {
        dynamicProductList.removeChild(lastProduct);
    } else {
        alert('No items to remove.');
    }
});
