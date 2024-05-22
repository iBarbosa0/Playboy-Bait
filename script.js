document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const imageContainer = document.getElementById('imageContainer');
    const fullscreenContainer = document.getElementById('fullscreen-image-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const buttonContainer = document.querySelector(".button-container");

    const images = ['Images/image1.jpg', 'Images/image2.jpg'];
    const songs = [
        'Musics/song1.mp3',
        'Musics/song2.mp3',
        'Musics/song3.mp3',
        'Musics/song4.mp3'
    ];
    let audioContext, gainNode, audioElement, track;


    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function getRandomSong() {
        const randomIndex = Math.floor(Math.random() * songs.length);
        return songs[randomIndex];
    }

    function showFullScreenImage(src) {
        // fullscreenImage.src = src;
        // fullscreenContainer.style.display = "flex";
        console.log('Showing full screen image:', src)

        const song = getRandomSong();
        console.log('Selected song:', song);
        audioElement = new Audio(song);
        audioElement.crossOrigin = "anonymous";
                
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        track = audioContext.createMediaElementSource(audioElement);
        gainNode = audioContext.createGain();
        gainNode.gain.value = 10;
                
        track.connect(gainNode).connect(audioContext.destination);

        audioElement.play().then(() => {
            console.log('Music started playing');
        }).catch(error => {
            console.error('Error playing music:', error);
        });
    }
    
    function hideFullScreenImage() {
        //fullscreenContainer.style.display = "none";
        //console.log('Hiding full screen image');

        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
            console.log('Stopping music');

            track.disconnect();
            gainNode.disconnect();
            audioContext.close();
        }
    }

    function handleClick() {
        if (Math.random() < 0.5) {
            const img = document.createElement('img');
            img.src = getRandomImage();
            img.alt = 'Random Image';
            img.classList.add('img_p');
            document.body.appendChild(img);
    
            const button1DisplayStyle = button1.style.display;
            const button2DisplayStyle = button2.style.display;
            button1.style.display = 'none';
            button2.style.display = 'none';
            
            setTimeout(() => {
                showFullScreenImage(img.src);
                title.style.display = 'none';

                setTimeout(() => {
                    hideFullScreenImage();
                    img.remove();
                    button1.style.display = button1DisplayStyle;
                    button2.style.display = button2DisplayStyle;
                    title.style.display = 'block';
                }, 10000);
            }, 0);
        }
    }


    button1.addEventListener('click', handleClick);
    button2.addEventListener('click', handleClick);

    title.style.display = 'block';
});
