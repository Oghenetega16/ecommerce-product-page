const productImage = document.querySelectorAll('.product-other-images img');
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

const unit = document.querySelector('.unit');
const increaseUnit = document.querySelector('.increase-unit');
const decreaseUnit = document.querySelector('.reduce-unit');

const addToCart = document.querySelector('.product-button');
const cartNotification = document.querySelector('.cartNotification');

const cartIcon = document.querySelector('.cart-icon');
const totalItemPrice = document.querySelector('.total-price');
const itemQuantity = document.querySelector('.item-unit');

let checkOut = document.querySelector('.checkout-btn');
let cartDetails = document.querySelector('.cart-details');
const deleteCartItem = document.querySelector('.delete-icon');

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

let currentIndex = 0;
let unitScore = 0;
let itemUnit;
let totalPrice;

// Function to display images
function showImage(index) {
    productImage.forEach((image, i) => {
        image.classList.toggle("active", i === index);
    });
}
// Show previous image
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + productImage.length) % productImage.length;
    showImage(currentIndex);
});

// Show next image
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % productImage.length;
    showImage(currentIndex);
});

// Increase unit quantity
increaseUnit.onclick = () => {
    unitScore += 1;
    unit.textContent = unitScore;
}

// Decrease unit quantity
decreaseUnit.onclick = () => {
    if (unitScore > 0) {
        unitScore -= 1;
        unit.textContent = unitScore;
    } else {
        unitScore = 0;
    }
}

// Add units to cart
addToCart.addEventListener('click', () => {
    if (unitScore > 0) {
        cartNotification.style.display = 'block';
        cartNotification.textContent = unitScore;
    }
});

// Show cart details when clicked
cartIcon.addEventListener('click', () => {
    if (unitScore > 0) {
        cartDetails.style.display = 'block';
        itemUnit = Number(unitScore);
        totalPrice = 125.00 * itemUnit;
        totalItemPrice.textContent = `$${totalPrice}`;
        itemQuantity.textContent = itemUnit;
    } else if (unitScore === 0) {
        emptyCart();
        setTimeout(() => {
            cartDetails.style.display = 'none';
            checkOutItem();
        }, 2000);
        
    }
});

// Checkout cart item
function checkOutItem() {
    document.body.style.opacity = 1;
    setTimeout(() => {
        location.reload();
    }, 500);
}

// Add a click event to the checkout button
checkOut.addEventListener('click', checkOutItem);

// Function to display an empty cart
function emptyCart() {
    document.querySelector('.cart-items').style.display = 'none';
    checkOut.style.display = 'none';

    const emptyText = document.createElement('span');
    emptyText.className = 'empty-text';
    emptyText.textContent = 'Your cart is empty.';
    cartDetails.appendChild(emptyText);
    cartDetails.style.display = 'block';
}

// Delete cart item
deleteCartItem.addEventListener('click', () => {
    cartNotification.style.display = 'none';
    emptyCart();
    setTimeout(() => {
        checkOutItem();
    }, 2000);
});

// When menu icon is clicked
menuIcon.addEventListener('click', () => {
    document.querySelector('header .nav-list').style.display = 'block';
});

// When close icon is clicked
closeIcon.addEventListener('click', () => {
    document.querySelector('header .nav-list').style.display = 'none';
});


// For Desktop and Tablet
let currentSlide = 0;

function showSlides(n) {
    const largeImages = document.querySelectorAll('.large-image');
    const thumbnails = document.querySelectorAll('.images img');

    if (n > largeImages.length) {
        currentSlide = 1;
    } else if (n < 1) {
        currentSlide = largeImages.length;
    }

    for (let i = 0; i < largeImages.length; i++) {
        largeImages[i].classList.remove('active');
    }

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active');
    }

    largeImages[currentSlide - 1].classList.add('active');
    thumbnails[currentSlide - 1].classList.add('active');
}

function changeSlide(n) {
    showSlides(currentSlide += n);
}

document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        showSlides(currentSlide = index + 1);
    });
});

showSlides(currentSlide);


productOverlay = document.querySelector('.product-overlay');
closeOverlay = document.querySelector('.product-overlay #close-icon');
closeOverlay.addEventListener('click', () => {
    productOverlay.classList.add('hide');
});



