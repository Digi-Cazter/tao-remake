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
        
        },
        "go": {
            "nw": [
                'characters/valla/go_nw/1.png',
                'characters/valla/go_nw/2.png',
                'characters/valla/go_nw/3.png',
                'characters/valla/go_nw/4.png',
                'characters/valla/go_nw/5.png',
                'characters/valla/go_nw/6.png',
                'characters/valla/go_nw/7.png',
                'characters/valla/go_nw/8.png',
            ],
            "s": [
                'characters/valla/go_s/1.png',
                'characters/valla/go_s/2.png',
                'characters/valla/go_s/3.png',
                'characters/valla/go_s/4.png',
                'characters/valla/go_s/5.png',
                'characters/valla/go_s/6.png',
                'characters/valla/go_s/7.png',
                'characters/valla/go_s/8.png',
            ],
            "se": [
                'characters/valla/go_se/1.png',
                'characters/valla/go_se/2.png',
                'characters/valla/go_se/3.png',
                'characters/valla/go_se/4.png',
                'characters/valla/go_se/5.png',
                'characters/valla/go_se/6.png',
                'characters/valla/go_se/7.png',
                'characters/valla/go_se/8.png',
            ],
            "sw": [
                'characters/valla/go_sw/1.png',
                'characters/valla/go_sw/2.png',
                'characters/valla/go_sw/3.png',
                'characters/valla/go_sw/4.png',
                'characters/valla/go_sw/5.png',
                'characters/valla/go_sw/6.png',
                'characters/valla/go_sw/7.png',
                'characters/valla/go_sw/8.png',
            ],
            "w": [
                'characters/valla/go_w/1.png',
                'characters/valla/go_w/2.png',
                'characters/valla/go_w/3.png',
                'characters/valla/go_w/4.png',
                'characters/valla/go_w/5.png',
                'characters/valla/go_w/6.png',
                'characters/valla/go_w/7.png',
                'characters/valla/go_w/8.png',
            ],
        },
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

const character = {
    element: null,
    x: 0,  // X-coordinate of the tile
    y: 0,  // Y-coordinate of the tile
    width: 50, // Default width, will be updated
    height: 50, // Default height, will be updated
    animation: 'idle',
    direction: 's',
    frameIndex: 0,
    frameRate: 120,
    animationTimeout: null
};

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

function adjustZoom() {
    const viewportWidth = window.innerWidth;
    const gridWidth = grid.offsetWidth;
    const scaleFactor = (viewportWidth / (gridWidth * 2)) * 0.9;
    viewport.style.zoom = 1.7 * scaleFactor;
}

function createCharacter() {
    character.element = document.createElement('img');
    character.element.className = 'character';
    character.element.style.position = 'absolute';
    character.element.style.zIndex = 1;
    updateCharacterPosition();
    grid.appendChild(character.element);
}

function updateCharacterPosition() {
    character.element.style.left = `${character.x * 50 - character.width / 2}px`;
    character.element.style.top = `${character.y * 50 - character.height}px`;
}

function animateCharacter() {
    const frames = characters.valla[character.animation][character.direction];
    character.element.src = frames[character.frameIndex % frames.length];
    character.frameIndex++;
}

function changeAnimation(animation, direction) {
    character.animation = animation;
    character.direction = direction;
    character.frameIndex = 0;
    updateCharacterPosition()
}

// Game Loop
const fps = 12;
let lastFrameTimeMs = 0;
let delta = 0;
const timestep = 1000 / fps;

function gameLoop(timestamp) {
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    while (delta >= timestep) {
        update(timestep); // Update game state
        delta -= timestep;
    }

    render(); // Render the game state
    requestAnimationFrame(gameLoop);
}

function update(delta) {
    // Update character animation independently
    let characterFrameAccumulator = 0;
    characterFrameAccumulator += delta;
    if (characterFrameAccumulator >= 1000 / character.frameRate) {
        animateCharacter();
        characterFrameAccumulator -= 1000 / character.frameRate;
    }

    // Other game updates...
}

function render() {
}

// Initialize grid, character, and adjust zoom
createGrid();
createCharacter();
adjustZoom();
changeAnimation('idle', 's');
window.changeAnimation = changeAnimation;

// Start the game loop
requestAnimationFrame(gameLoop);

// Adjust zoom whenever window is resized
window.addEventListener('resize', adjustZoom);