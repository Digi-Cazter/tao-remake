const grid = document.getElementById('isometric-grid');
const viewport = document.getElementById('viewport');
// const layout = [[1]];
const layout = [
    [0, 0, 1, 1, 1, 1, 1, 1, 1 ,0 ,0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1 ,1 ,0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1 ,0 ,0],
]; // 2D array defining the grid layout

// Function to create the grid
function createGrid() {
    layout.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === 1) {
                const tile = document.createElement('span');
                tile.className = 'tile';
                tile.style.left = `${x * 50}px`;
                tile.style.top = `${y * 50}px`;

                const overlay = document.createElement('span');
                overlay.className = 'overlay';
                tile.appendChild(overlay);

                grid.appendChild(tile);
            }
        });
    });
}

// Function to adjust zoom based on window size
function adjustZoom() {
    const viewportWidth = window.innerWidth;
    const gridWidth = grid.offsetWidth;
    
    // Calculate scale factor
    const scaleFactor = (viewportWidth / (gridWidth*2))*0.9;
    console.log(scaleFactor);
    viewport.style.zoom = 1.7*scaleFactor;
}

// Initialize grid and adjust zoom
createGrid();
adjustZoom();

// Adjust zoom whenever window is resized
window.addEventListener('resize', adjustZoom);

const character = document.createElement('img');
character.id = 'character';
character.src = 'characters/valla/idle_s/1.png'; // Replace with the path to your character image
character.className = 'character';
// character.style.width = '45px'; // Set the width of your character
// character.style.height = '130px'; // Set the height of your character
// Assuming you want to place the character on the tile at (x, y)
const characterX = 8; // X-coordinate of the tile
const characterY = 5; // Y-coordinate of the tile
character.style.position = 'relative';
character.style.left = `${(50*characterX)-$(`#${character.id}`).naturalWidth+8}px`;
character.style.top = `${(50*characterY)-$(`#${character.id}`).naturalHeight-8}px`;
character.style.width = `${character.naturalWidth}px`;
character.style.height = `${character.naturalHeight}px`;
character.style.zIndex = 1; // Ensure the character is above the tiles
grid.appendChild(character);

characters = {
    'valla': {
        'idle': {
            'nw': [
                'characters/valla/idle_nw/1.png',
                'characters/valla/idle_nw/2.png',
                'characters/valla/idle_nw/3.png',
                'characters/valla/idle_nw/4.png',
                'characters/valla/idle_nw/5.png',
            ],
            's': [
                'characters/valla/idle_s/1.png',
                'characters/valla/idle_s/2.png',
                'characters/valla/idle_s/3.png',
                'characters/valla/idle_s/4.png',
                'characters/valla/idle_s/5.png',
            ],
            'se': [
                'characters/valla/idle_se/1.png',
                'characters/valla/idle_se/2.png',
                'characters/valla/idle_se/3.png',
                'characters/valla/idle_se/4.png',
                'characters/valla/idle_se/5.png',
            ],
            'sw':[
                'characters/valla/idle_sw/1.png',
                'characters/valla/idle_sw/2.png',
                'characters/valla/idle_sw/3.png',
                'characters/valla/idle_sw/4.png',
                'characters/valla/idle_sw/5.png',
            ],
            'w': [
                'characters/valla/idle_w/1.png',
                'characters/valla/idle_w/2.png',
                'characters/valla/idle_w/3.png',
                'characters/valla/idle_w/4.png',
                'characters/valla/idle_w/5.png',
            ],
        
        }
    }
}

const characterDeathFrames = [
    'characters/valla/death/01.png',
    'characters/valla/death/02.png',
    'characters/valla/death/03.png',
    'characters/valla/death/04.png',
    'characters/valla/death/05.png',
    'characters/valla/death/06.png',
    'characters/valla/death/07.png',
    'characters/valla/death/08.png',
    'characters/valla/death/09.png',
    'characters/valla/death/10.png',
    'characters/valla/death/11.png',
    'characters/valla/death/12.png',
    'characters/valla/death/13.png',
    'characters/valla/death/14.png',
    'characters/valla/death/15.png',
    'characters/valla/death/16.png',
    'characters/valla/death/17.png',
    'characters/valla/death/18.png',
    'characters/valla/death/19.png',
    'characters/valla/death/20.png',
];

let currentFrameIndex = 0;
const frameRate = 120; // Time in milliseconds between frames

function animateDeathCharacter() {
    currentFrameIndex = (currentFrameIndex + 1) % characterDeathFrames.length;
    character.src = characterDeathFrames[currentFrameIndex];
}

function animateCharacter() {
    currentFrameIndex = (currentFrameIndex + 1) % characters.valla[window.animation][window.animationDirection].length;
    character.src = characters.valla[window.animation][window.animationDirection][currentFrameIndex];
}

window.animation = "idle";
window.animationDirection = "s";
window.animationTimeout = null;

function checkAnimation() {
    if (window.animation === "death") {
        clearTimeout(window.animationTimeout);
        window.animationTimeout = setInterval(animateDeathCharacter, frameRate);       
    } else {
        clearTimeout(window.animationTimeout);
        window.animationTimeout = setInterval(animateCharacter, frameRate);       
    }

    setTimeout(checkAnimation, 1000);
}

checkAnimation();