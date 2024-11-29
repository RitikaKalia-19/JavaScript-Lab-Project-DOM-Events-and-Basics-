window.onload = function() {
    const labyrinth = new Labyrinth();
    labyrinth.printDisplay('map'); 
    labyrinth.printConsole(); 

    // Listen for key presses to move the character
    document.addEventListener('keydown', function(event) {
        const key = event.key; 

        // Calculate new position based on key pressed
        let newX = labyrinth.character.x;
        let newY = labyrinth.character.y;

        if (key === 'ArrowUp') {
            newY--; 
        } else if (key === 'ArrowDown') {
            newY++; 
        } else if (key === 'ArrowLeft') {
            newX--;
        } else if (key === 'ArrowRight') {
            newX++; 
        }

        // Check for collisions with walls and boundaries
        if (newX >= 0 && newX < labyrinth.map[0].length && newY >= 0 && newY < labyrinth.map.length) {
            if (labyrinth.map[newY][newX] === 0) { 
                labyrinth.character.x = newX;
                labyrinth.character.y = newY;
            }
        }

        // Check if the character reached the end point
        if (labyrinth.character.x === labyrinth.end.x && labyrinth.character.y === labyrinth.end.y) {
            alert("Congratulations! You've reached the end!"); 
        }

        labyrinth.printDisplay('map'); 
        labyrinth.printConsole(); 
    });
};
