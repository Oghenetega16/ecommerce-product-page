const productImage = document.querySelectorAll('.product-other-images img');
const prevButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

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

const unit = document.querySelector('.unit');
const increaseUnit = document.querySelector('.increase-unit');
const decreaseUnit = document.querySelector('.reduce-unit');

let unitScore = 0;

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

const addToCart = document.querySelector('.product-button');
addToCart.addEventListener('click', () => {
    if (unitScore > 0) {
        const cartNotification = 

    }
})
