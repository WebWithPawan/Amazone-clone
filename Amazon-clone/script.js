const imgs = document.querySelectorAll('.header-slider ul img');
const pre_button = document.querySelector(".control-prev");
const next_button = document.querySelector(".control-next");

let n = 0;

function changeSlide() {
    // Hide all images
    imgs.forEach((img, index) => {
        img.style.display = (index === n) ? 'block' : 'none';
    });
}

// Show the first image initially
changeSlide();

// Event listeners for buttons
next_button.addEventListener('click', () => {
    n = (n + 1) % imgs.length; // Loop back to the first image
    changeSlide();
});

pre_button.addEventListener('click', () => {
    n = (n - 1 + imgs.length) % imgs.length; // Loop back to the last image
    changeSlide();
});

