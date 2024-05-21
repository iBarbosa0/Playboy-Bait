document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const imageContainer = document.getElementById('imageContainer');
    const fullscreenContainer = document.getElementById('fullscreen-image-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const buttonContainer = document.querySelector(".button-container");

    const images = ['Images/image1.jpg', 'Images/image2.jpg'];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function showFullScreenImage(src) {
        fullscreenImage.src = src;
        fullscreenContainer.style.display = "flex";
        console.log('Showing full screen image:', src)
    }
    
    function hideFullScreenImage() {
        fullscreenContainer.style.display = "none";
        console.log('Hiding full screen image');
    }

    function handleClick() {
        imageContainer.innerHTML = '';
        if (Math.random() < 0.5) {
            const img = document.createElement('img');
            img.src = getRandomImage();
            img.alt = 'Random Image';
            img.style.width = '575px';
            img.style.height = 'auto';
            document.body.appendChild(img);
    
            const button1DisplayStyle = button1.style.display;
            const button2DisplayStyle = button2.style.display;
            button1.style.display = 'none';
            button2.style.display = 'none';
    
            setTimeout(() => {
                img.remove();
                button1.style.display = button1DisplayStyle;
                button2.style.display = button2DisplayStyle;
            }, 5000);
        }
    }
    

    button1.addEventListener('click', handleClick);
    button2.addEventListener('click', handleClick);
});
