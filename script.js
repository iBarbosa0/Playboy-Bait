document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const imageContainer = document.getElementById('imageContainer');
    const images = ['Images/image1.jpg', 'Images/image2.jpg'];
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
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
});