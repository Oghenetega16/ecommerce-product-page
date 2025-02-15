const productImage = document.querySelectorAll('.products-mobile img');
const prevButton = document.querySelector('.previous-btn');
const nextButton = document.querySelector('.next-btn');

const unit = document.querySelector('.unit');
const increaseUnit = document.querySelector('.increase-unit');
const decreaseUnit = document.querySelector('.reduce-unit');

const addToCart = document.querySelector('.button-mobile');
const cartNotification = document.querySelector('.cart-notification');

const cartIcon = document.querySelector('.cart-icon');
const totalItemPrice = document.querySelector('.total-price');
const itemQuantity = document.querySelector('.item-unit');

let checkOut = document.querySelector('.checkout-btn');
let cartDetails = document.querySelector('.cart-details-mobile');
const deleteCartItem = document.querySelector('.delete-icon');

const menuIcon = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');

let currentIndex = 0;
let unitScore = 0;
let itemUnit;
let totalPrice;

                              // functionality for mobile devices
// function to display images
function showImage(index) {
    productImage.forEach((image, i) => {
        image.classList.toggle("active", i === index);
    });
}
// handles click for the previous button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + productImage.length) % productImage.length;
    showImage(currentIndex);
});

// handles click for the next button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % productImage.length;
    showImage(currentIndex);
});

// handles click to increase unit quantity
increaseUnit.onclick = () => {
    unitScore += 1;
    unit.textContent = unitScore;
}

// handles click to decrease unit quantity
decreaseUnit.onclick = () => {
    if (unitScore > 0) {
        unitScore -= 1;
        unit.textContent = unitScore;
    } else {
        unitScore = 0;
    }
}

// handles click to add units to cart
addToCart.addEventListener('click', () => {
    if (unitScore > 0) {
        cartNotification.style.display = 'block';
        cartNotification.textContent = unitScore;
    }
});

// handles click to show cart details when clicked
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

// handles click to checkout cart item
function checkOutItem() {
    document.body.style.opacity = 1;
    setTimeout(() => {
        location.reload();
    }, 500);
}

// handles click to checkout an item
checkOut.addEventListener('click', checkOutItem);

// function to display an empty cart
function emptyCart() {
    document.querySelector('.cart-items').style.display = 'none';
    checkOut.style.display = 'none';

    const emptyText = document.createElement('span');
    emptyText.className = 'empty-text';
    emptyText.textContent = 'Your cart is empty.';
    cartDetails.appendChild(emptyText);
    cartDetails.style.display = 'block';
}

// handles click to delete cart item
deleteCartItem.addEventListener('click', () => {
    cartNotification.style.display = 'none';
    emptyCart();
    setTimeout(() => {
        checkOutItem();
    }, 2000);
});

// handles click for the menu icon 
menuIcon.addEventListener('click', () => {
    document.querySelector('.nav-list-overlay').style.display = 'block';
    document.querySelector('.container-mobile').classList.toggle('blurred');
});

// handles click for the close icon 
closeIcon.addEventListener('click', () => {
    document.querySelector('.nav-list-overlay').style.display = 'none';
    document.querySelector('#container').classList.remove('blurred');
});


// for desktop devices
const addUnit = document.querySelector('.plus');
const reduceUnit = document.querySelector('.minus');
const quantity = document.querySelector('.quantity');
const addCart = document.querySelector('.button-desktop');
const cartMessage = document.querySelector('.cart-notification-desktop');
const cartDisplay = document.querySelector('.cart');
const itemUnitDesktop = document.querySelector('.item-unit-desktop');
const totalPriceDesktop = document.querySelector('.total-price-desktop');
let cartContainer = document.querySelector('.cart-details-desktop');
const deleteItem = document.querySelector('.delete');
const checkoutItem = document.querySelector('.checkout');
let currentSlide = 0;

// handles click to increase unit quantity
addUnit.onclick = () => {
    unitScore += 1;
    quantity.textContent = unitScore;
}

// handles click to decrease unit quantity
reduceUnit.onclick = () => {
    if (unitScore > 0) {
        unitScore -= 1;
        quantity.textContent = unitScore;
    } else {
        unitScore = 0;
    }
}

// handles click to add units to cart
addCart.addEventListener('click', () => {
    if (unitScore > 0) {
        cartMessage.style.display = 'block';
        cartMessage.textContent = unitScore;
    }
});

cartDisplay.addEventListener('click', () => {
    if (unitScore > 0) {
        cartContainer.style.display = 'block';
        itemUnit = Number(unitScore);
        totalPrice = (125.00 * itemUnit).toFixed(2);
        totalPriceDesktop.textContent = `$${totalPrice}`;
        itemUnitDesktop.textContent = itemUnit;
    } else if (unitScore === 0) {
        empty();
        setTimeout(() => {
            cartContainer.style.display = 'none';
            checkOutItem();
        }, 2000);
        
    }
});

// function to display an empty cart
function empty() {
    document.querySelector('.cart-items-desktop').style.display = 'none';
    checkoutItem.style.display = 'none';

    const emptyText = document.createElement('span');
    emptyText.className = 'empty-text';
    emptyText.textContent = 'Your cart is empty.';
    cartContainer.appendChild(emptyText);
    cartContainer.style.display = 'block';
}

// handles click to checkout an item
checkoutItem.addEventListener('click', checkOutItem);

// handles click to delete cart item
deleteItem.addEventListener('click', () => {
    cartMessage.style.display = 'none';
    empty();
    setTimeout(() => {
        checkOutItem();
    }, 2000);
});

// function for displaying main images
function showSlides(n) {
    const largeImages = document.querySelectorAll('.large-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    for (let i = 0; i < largeImages.length; i++) {
        largeImages[i].classList.remove('active');
    }

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('active');
    }

    largeImages[currentSlide - 1].classList.add('active');
    thumbnails[currentSlide - 1].classList.add('active');
}

// handles click for thumbnails
document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        showSlides(currentSlide = index + 1);
    });
});


const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
let overlayImages = document.querySelectorAll('.overlay-large-image');
let overlayThumbnails = document.querySelectorAll('.overlay-thumbnail');

function updateImageDisplay() {
    overlayImages.forEach((overlayImage, index) => {
        overlayImage.classList.toggle('active', index === currentSlide);
    });

    overlayThumbnails.forEach((overlayThumbnail, index) => {
        overlayThumbnail.classList.toggle('active', index === currentSlide);
    });
}

previous.addEventListener('click', () => {
    document.querySelector('.previous').style.stroke = 'var(--orange)';
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : overlayImages.length - 1;
    updateImageDisplay();
});

next.addEventListener('click', () => {
    document.querySelector('.next').style.stroke = 'var(--orange)';
    currentSlide = (currentSlide < overlayImages.length - 1) ? currentSlide + 1 : 0;
    updateImageDisplay();
});


function displaySlides(n) {

    for (let i = 0; i < overlayImages.length; i++) {
        overlayImages[i].classList.remove('active');
    }

    for (let i = 0; i < overlayThumbnails.length; i++) {
        overlayThumbnails[i].classList.remove('active');
    }

    overlayImages[currentSlide - 1].classList.add('active');
    overlayThumbnails[currentSlide - 1].classList.add('active');
}

// handles click for thumbnails
overlayThumbnails.forEach((overlayThumbnail, index) => {
    overlayThumbnail.addEventListener('click', () => {
        displaySlides(currentSlide = index + 1);
    });
});

const largeImage = document.querySelector('.product-image');
const close = document.querySelector('.close-desktop');
largeImage.addEventListener('click', () => {
    document.querySelector('.product-overlay-desktop').classList.remove('hide');
    document.querySelector('.container-desktop').classList.add('blurred');
});

close.addEventListener('click', () => {
    document.querySelector('.product-overlay-desktop').classList.add('hide');
    document.querySelector('.container-desktop').classList.remove('blurred');
    document.querySelector('.previous').style.stroke = '#1D2026';
    document.querySelector('.next').style.stroke = '#1D2026';
}); 
