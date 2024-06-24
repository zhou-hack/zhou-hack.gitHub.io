let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
    const currentImage = images[currentIndex];
    currentImage.classList.remove('active');
    currentImage.classList.add('prev');

    currentIndex = (currentIndex + 1) % totalImages;
    const nextImage = images[currentIndex];
    nextImage.classList.remove('next');
    nextImage.classList.add('active');

    setTimeout(() => {
        currentImage.classList.remove('prev');
        currentImage.classList.add('next');
    }, 1000); // Duration of the transition
}

setInterval(showNextImage, 2000);