const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev=  document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    // Get current slide
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');

    // Check for next slide
    if(current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to first
        slides[0].classList.add('current')
    }
    // setTimeout(() => current.classList.remove('current'));
}
const prevSlide = () => {
    // Get current slide
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');

    // Check for prev slide
    if(current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
        current.previ
    } else {
        // Add current to last
        slides[slides.length -1].classList.add('current')
    }
    // setTimeout(() => current.classList.remove('current'));
}

// Button Event Listsner
next.addEventListener('click', (e) => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

prev.addEventListener('click', (e) => {
    prevSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})


// Auto Slide
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}