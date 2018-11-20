window.addEventListener('load', () => {
    
    const images = document.getElementsByTagName('img');

    for (let image of images) {
        console.log('Image size: ' + image.width + 'x' + image.height);
    }

});


