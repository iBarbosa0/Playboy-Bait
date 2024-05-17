document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const imageContainer = document.getElementById('imageContainer');
    const images = ['Images/image1.jpg', 'Images/image2.jpg'];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function showFullScreenImage() {
        const fullscreenContainer = document.getElementById("fullscreen-image-container");
        const fullscreenImage = document.getElementById("fullscreen-image");
        fullscreenImage.src = src;
        fullscreenContainer.style.display = "flex";
    }
    
    function hideFullScreenImage() {
        const fullscreenContainer = document.getElementById("fullscreen-image-container");
        fullscreenContainer.style.display = "none";
    }

    function handleClick() {
        imageContainer.innerHTML = '';
        if (Math.random() < 0.5) {
            const img = document.createElement('img');
            img.src = getRandomImage();
            img.alt = 'Random Image';
            img.style.maxWidth = '200px';
            imageContainer.appendChild(img);
        }
    }

    button1.addEventListener('click', handleClick);
    button2.addEventListener('click', handleClick);
    let imageDisplayed = false;

    if (imageDisplayed) {
        setTimeout(() => {
            const displayedImages = document.querySelectorAll("button img");
            if (displayedImages.length > 0) {
                showFullScreenImage(displayedImages[0].src);
                document.querySelector(".button-container").style.display = "none";

                setTimeout(() => {
                    hideFullScreenImage();
                    document.querySelector(".button-container").style.display = "flex";
                }, 30000);
            }
        }, 0);
    }
});