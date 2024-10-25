function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    const media = carousel.querySelectorAll('.carousel-image, video');
    let currentIndex;
    for (let i = 0; i < media.length; i++) {
        if (media[i].style.display === 'block') {
            currentIndex = i;
            media[i].style.display = 'none';
            break;
        }
    }
    const nextIndex = (currentIndex + 1) % media.length;
    media[nextIndex].style.display = 'block';
}

    function prevSlide(carouselId) {
        const carousel = document.getElementById(carouselId);
        const media = carousel.querySelectorAll('.carousel-image, video');
        let currentIndex;
        for (let i = 0; i < media.length; i++) {
            if (media[i].style.display === 'block') {
                currentIndex = i;
                media[i].style.display = 'none';
                break;
            }
        }
        const prevIndex = (currentIndex - 1 + media.length) % media.length;
        media[prevIndex].style.display = 'block';
    }