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
            'n': {
				'size': {
					'x': 56,
					'y': 66,
				},
				'images': [
					'characters/valla/idle_w/1.png',
					'characters/valla/idle_w/2.png',
					'characters/valla/idle_w/3.png',
					'characters/valla/idle_w/4.png',
					'characters/valla/idle_w/5.png',
				],
			},
            'e': {
				'size': {
					'x': 42,
					'y': 64,
				},
				'images': [
					'characters/valla/idle_s/1.png',
					'characters/valla/idle_s/2.png',
					'characters/valla/idle_s/3.png',
					'characters/valla/idle_s/4.png',
					'characters/valla/idle_s/5.png',
				],
			},
            's': {
				'size': {
					'x': 42,
					'y': 64,
				},
				'images': [
					'characters/valla/idle_s/1.png',
					'characters/valla/idle_s/2.png',
					'characters/valla/idle_s/3.png',
					'characters/valla/idle_s/4.png',
					'characters/valla/idle_s/5.png',
            	],
			},
            'w': {
				'size': {
					'x': 56,
					'y': 66,
				},
				'images': [
					'characters/valla/idle_w/1.png',
					'characters/valla/idle_w/2.png',
					'characters/valla/idle_w/3.png',
					'characters/valla/idle_w/4.png',
					'characters/valla/idle_w/5.png',
				],
			},
        
        },
        "go": {
            "n": {
                'size': {
                    'x': 50,
                    'y': 64,
                },
                'images': [
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
            "e": {
                'size': {
                    'x': 60,
                    'y': 80,
                },
                'images': [
                    'characters/valla/go_s/1.png',
                    'characters/valla/go_s/2.png',
                    'characters/valla/go_s/3.png',
                    'characters/valla/go_s/4.png',
                    'characters/valla/go_s/5.png',
                    'characters/valla/go_s/6.png',
                    'characters/valla/go_s/7.png',
                    'characters/valla/go_s/8.png',
                ],
            },
            "s": {
                'size': {
                    'x': 60,
                    'y': 80,
                },
                'images': [
                    'characters/valla/go_s/1.png',
                    'characters/valla/go_s/2.png',
                    'characters/valla/go_s/3.png',
                    'characters/valla/go_s/4.png',
                    'characters/valla/go_s/5.png',
                    'characters/valla/go_s/6.png',
                    'characters/valla/go_s/7.png',
                    'characters/valla/go_s/8.png',
                ],
            },
            "w": {
                'size': {
                    'x': 50,
                    'y': 64,
                },
                'images': [
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
        },
        "death": {
            "" : {
                'size': {
                    'x': 70,
                    'y': 140,
                },
                'images': [
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
                ]
            }
        }
    }
}

const character = {
    element: null,
    image: null,
    x: 0,  // X-coordinate of the tile
    y: 3,  // Y-coordinate of the tile
    width: 42, // Default width, will be updated
    height: 64, // Default height, will be updated
    animation: 'idle',
    direction: 's',
    frameIndex: 0,
    frameRate: 4,
    frameAccumulator: 0,
    path: [],
    pathIndex: null,
    targetX: null,
    targetY: null,
    animationTimeout: null
};

window.character = character;

function calculatePath(startX, startY, targetX, targetY) {
    // Create a queue for BFS
    const queue = [{ x: startX, y: startY, path: [] }];
    const visited = new Set();
    
    // Define possible moves (up, down, left, right)
    const moves = [{ dx: -1, dy: 0 }, { dx: 1, dy: 0 }, { dx: 0, dy: -1 }, { dx: 0, dy: 1 }];

    while (queue.length > 0) {
        const { x, y, path } = queue.shift();
        
        if (x === targetX && y === targetY) {
            // Found the target, return the path
            return path;
        }

        // Explore neighboring cells
        for (const move of moves) {
            const newX = x + move.dx;
            const newY = y + move.dy;

            // Check if the new position is within bounds and not visited
            if (
                newX >= 0 && newX < layout[0].length &&
                newY >= 0 && newY < layout.length &&
                !visited.has(`${newX}-${newY}`) &&
                layout[newY][newX] === 1 // Ensure it's a valid grid cell
            ) {
                // Mark the cell as visited
                visited.add(`${newX}-${newY}`);
                
                // Add the new position to the queue with the updated path
                queue.push({ x: newX, y: newY, path: [...path, { x: newX, y: newY }] });
            }
        }
    }

    // If no path is found, return an empty array
    return [];
}

function moveToTarget() {
    targetX = character.targetX;
    targetY = character.targetY;

    if (targetX !== null && targetY !== null) {
        character.path = calculatePath(character.x, character.y, targetX, targetY);
    }

    if (character.path.length === 0) {
        // No valid path found
        return;
    } else {
        character.pathIndex = 0;
    }

    const nextStep = character.path[character.pathIndex];
    console.log(nextStep);
    if (nextStep) {
        // Check if the character is facing the correct direction
        const targetDirection = getDirection(character.x, character.y, targetX, targetY);
        if (character.direction !== targetDirection) {
            // Switch character animation to the correct direction first
            changeAnimation("go", targetDirection);
            return; // Don't move until animation is complete
        }

        character.x = nextStep.x;
        character.y = nextStep.y;

        updateCharacterPosition();
        character.pathIndex++;

        // Check if the character has reached the target
        if (!character.path[character.pathIndex]) {
            // Character has reached the target, switch to "idle" animation
            character.pathIndex = null;
            character.path = [];
            character.targetX = null;
            character.targetY = null;
            changeAnimation("idle", character.direction);
        }
    }
}

function getDirection(startX, startY, targetX, targetY) {
    // Determine the direction based on the change in coordinates
    if (targetX < startX) {
        return "w"; // Character is moving west
    } else if (targetX > startX) {
        return "e"; // Character is moving east
    } else if (targetY < startY) {
        return "n"; // Character is moving north
    } else if (targetY > startY) {
        return "s"; // Character is moving south
    } else {
        return character.direction; // Maintain the current direction if not moving
    }
}

function createGrid() {
    layout.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === 1) {
                const tile = document.createElement('span');
                tile.className = 'tile';
                tile.style.left = `${(x * 50) + 8}px`;
                tile.style.top = `${(y * 50) + 8}px`;

                const overlay = document.createElement('span');
                overlay.className = 'overlay'; // Add a class for overlay
                overlay.style.pointerEvents = 'none'; // Disable pointer events on overlay

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
    const frames = characters.valla[character.animation][character.direction].images;
    character.element.src = frames[character.frameIndex % frames.length];
    character.frameIndex++;

	character.width = characters.valla[character.animation][character.direction].size.x;
	character.height = characters.valla[character.animation][character.direction].size.y;
	character.element.style.width = `${characters.valla[character.animation][character.direction].size.x}px`;
	character.element.style.height = `${characters.valla[character.animation][character.direction].size.y*2}px`;
}

function changeAnimation(animation, direction) {
    character.animation = animation;
    character.direction = direction;
    if (character.direction == 'n' || character.direction == 'e') {
        character.element.style.transform = 'rotateY(180deg) rotate(45deg)';
    } else {
        character.element.style.transform = '';
    }
    character.frameIndex = 0;
}

// Game Loop
const fps = 60;
let lastFrameTimeMs = 0;
let delta = 0;
const timestep = 1000 / fps;
let frameCount = 0;
let lastFpsUpdateTime = 0;
let currentFps = 0;

function gameLoop(timestamp) {
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    // Update game state at a fixed timestep of 1/60th of a second
    while (delta >= timestep) {
        update(timestep); // Update game state
        delta -= timestep;

        // Update character animation independently of game state
        character.frameAccumulator += timestep;
        if (character.frameAccumulator >= 1000 / character.frameRate) {
            animateCharacter();
            moveToTarget();
            character.frameAccumulator = 0;
        }
        character.frameAccumulator += 1;
    }

    render(); // Render the game state
    requestAnimationFrame(gameLoop);

    updateFpsCounter(timestamp);
}

function updateFpsCounter(currentTime) {
    if (currentTime - lastFpsUpdateTime > 1000) { // Update every second
        currentFps = frameCount;
        frameCount = 0;
        lastFpsUpdateTime = currentTime;
        //displayFps(); // Display the current FPS
    } else {
        frameCount++;
    }
}

function displayFps() {
    console.log(`Current FPS: ${currentFps}`); // Or display it in your game
}

function update(delta) {
    // Update character animation independently
    character.frameAccumulator += delta;
    if (character.frameAccumulator >= 1000 / character.frameRate) {
        animateCharacter();
        character.frameAccumulator = 0;
    }

    // Other game updates...
}

function render() {
    updateCharacterPosition();
}

grid.addEventListener('click', function(event) {
    // Get the click position relative to the viewport
    const clickX = event.clientX;
    const clickY = event.clientY;

    // Use document.elementFromPoint to get the element at the click position
    const clickedElement = document.elementFromPoint(clickX, clickY);

    // Check if the clicked element is a grid cell
    if (clickedElement && clickedElement.classList.contains('tile')) {
        // Calculate the grid coordinates based on the clicked cell's position
        const gridCellSize = 50; // Adjust this size if needed
        const gridXCoord = Math.floor((clickedElement.offsetLeft - 8) / gridCellSize);
        const gridYCoord = Math.floor((clickedElement.offsetTop - 8) / gridCellSize);

        // Output the grid coordinates
        character.targetX = gridXCoord;
        character.targetY = gridYCoord;
        console.log(`Clicked on grid cell at X: ${gridXCoord}, Y: ${gridYCoord}`);
    }
});

// Function to preload character frames and set image dimensions
function preloadCharacterFrames() {
    const frames = characters.valla[character.animation][character.direction].images;
    const frameCount = frames.length;
    const images = [];
    
    frames.forEach((framePath, index) => {
        const image = new Image();
        image.src = framePath;
        image.onload = function() {
            images[index] = image;
            if (images.length === frameCount) {
                // All frames are loaded, set dimensions and start the game loop
                const firstImage = images[0];
                character.width = firstImage.width;
                character.height = firstImage.height;
                character.element.style.width = `${character.width}px`;
                character.element.style.height = `${character.height * 2}px`;
                requestAnimationFrame(gameLoop);
            }
        };
    });
}

// Initialize grid, character, and adjust zoom
createGrid();
createCharacter();
adjustZoom();
preloadCharacterFrames();
changeAnimation('idle', 's');
window.changeAnimation = changeAnimation;

// Start the game loop
requestAnimationFrame(gameLoop);

// Adjust zoom whenever window is resized
window.addEventListener('resize', adjustZoom);
