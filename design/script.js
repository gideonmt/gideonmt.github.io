const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { scrollX, scrollY } = window;

    cursorFollower.style.left = `${mouseX - cursorFollower.clientWidth / 2}px`;
    cursorFollower.style.top = `${mouseY - cursorFollower.clientHeight / 2 + scrollY}px`;
});

const gifs = [
    { src: './gifs/star1.gif', chance: 10, width: '20px', height: '20px' },
    { src: './gifs/starsingle.gif', chance: 65, width: '40px', height: '40px' },
    { src: './gifs/starsingle.gif', chance: 18, width: '60px', height: '60px' },
    { src: './gifs/starsingle.gif', chance: 5, width: '80px', height: '80px' },
    { src: './gifs/GiroStar.gif', chance: 0.5, width: '15px', height: '15px' },
    { src: './gifs/galaxy.gif', chance: 0.3, width: '30px', height: '30px' },
    { src: './gifs/galaxy.gif', chance: 0.2, width: '50px', height: '50px' },
    { src: './gifs/ani_galaxy.gif', chance: 0.3, width: '40px', height: '40px' },
    { src: './gifs/ani_galaxy.gif', chance: 0.2, width: '60px', height: '60px' },
];

function createGif(src, width, height) {
    const gif = document.createElement("img");
    gif.classList.add("gif");
    gif.src = src;
    gif.style.width = width;
    gif.style.height = height;
    gif.style.left = `${Math.random() * window.innerWidth}px`;
    gif.style.top = `${Math.random() * window.innerHeight + scrollY - 80}px`;
    document.body.appendChild(gif);

    setTimeout(() => {
        gif.remove();
    }, 10000);
}

function spawnGifs() {
    const randomChance = Math.random() * 100;

    let cumulativeChance = 0;
    for (const gif of gifs) {
        cumulativeChance += gif.chance;
        if (randomChance < cumulativeChance) {
            createGif(gif.src, gif.width, gif.height);
            break;
        }
    }
}

setInterval(spawnGifs, 10);

async function spawnCatUnderCursor(event) {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';
    const response = await fetch(`${apiUrl}`);
    const data = await response.json();

    if (data.length === 0) {
        console.error('No cat images found.');
        return;
    }

    const catImageUrl = data[0].url;

    const catImage = document.createElement('img');
    catImage.src = catImageUrl;
    catImage.alt = 'Cat Image';
    catImage.style.maxWidth = '150px';
    catImage.style.height = 'auto';

    catImage.style.position = 'absolute';
    const { scrollY } = window;
    catImage.style.left = (event.clientX - catImage.width / 2) + 'px';
    catImage.style.top = (event.clientY - catImage.height / 2 + scrollY) + 'px';

    document.body.appendChild(catImage);

    setTimeout(() => {
        document.body.removeChild(catImage);
    }, 3000);
}

document.body.addEventListener('click', spawnCatUnderCursor);
