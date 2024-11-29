var CELL_SIZE = 40; // Define CELL_SIZE globally

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
    ];
    
    // Define start and end coordinates
    this.start = { x: 0, y: 0 }; 
    this.end = { x: 5, y: 4 }; 
    this.character = { x: this.start.x, y: this.start.y }; 
}

// Method to print the labyrinth in the console
Labyrinth.prototype.printConsole = function() {
    console.clear(); // Clear console for fresh output
    for (let row of this.map) {
        let line = row.map(cell => (cell === 1 ? '*' : ' ')).join(''); 
        console.log(line);
    }
};

// Method to print the labyrinth in the display
Labyrinth.prototype.printDisplay = function(id) {
    const mapDiv = document.getElementById(id);
    const mapWidth = this.map[0].length * CELL_SIZE;
    const mapHeight = this.map.length * CELL_SIZE;

    // Set dimensions and style for the map div
    mapDiv.style.width = mapWidth + 'px';
    mapDiv.style.height = mapHeight + 'px';
    mapDiv.style.position = 'relative'; 
    
    // Clear existing content
    mapDiv.innerHTML = '';

    // Create the labyrinth visual representation
    for (let i = 0; i < this.map.length; i++) {
        for (let j = 0; j < this.map[i].length; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.style.width = CELL_SIZE + 'px';
            cellDiv.style.height = CELL_SIZE + 'px';
            cellDiv.style.position = 'absolute';
            cellDiv.style.left = (j * CELL_SIZE) + 'px'; 
            cellDiv.style.top = (i * CELL_SIZE) + 'px'; 
            cellDiv.style.backgroundColor = this.map[i][j] === 1 ? 'grey' : 'white';

            mapDiv.appendChild(cellDiv);
        }
    }

    // Draw the character and the end point
    this.drawCharacter(mapDiv);
    this.drawEnd(mapDiv);
};

// Method to draw the character
Labyrinth.prototype.drawCharacter = function(mapDiv) {
    const charDiv = document.createElement('div');
    charDiv.style.width = CELL_SIZE + 'px';
    charDiv.style.height = CELL_SIZE + 'px';
    charDiv.style.position = 'absolute';
    charDiv.style.left = (this.character.x * CELL_SIZE) + 'px';
    charDiv.style.top = (this.character.y * CELL_SIZE) + 'px';
    charDiv.classList.add('character'); 

    mapDiv.appendChild(charDiv);
};

// Method to draw the end point
Labyrinth.prototype.drawEnd = function(mapDiv) {
    const endDiv = document.createElement('div');
    endDiv.style.width = CELL_SIZE + 'px';
    endDiv.style.height = CELL_SIZE + 'px';
    endDiv.style.position = 'absolute';
    endDiv.style.left = (this.end.x * CELL_SIZE) + 'px'; 
    endDiv.style.top = (this.end.y * CELL_SIZE) + 'px'; // y-coordinate
    endDiv.classList.add('end'); // Add end class

    mapDiv.appendChild(endDiv);
};
