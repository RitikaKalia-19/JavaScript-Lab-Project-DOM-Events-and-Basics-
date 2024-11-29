// Get reference to the div element
const div = document.getElementById('mydiv');

// Initialize the first color as blue
let colors = ['blue', 'red', 'green'];
let colorIndex = 0;

// Set initial color to blue
div.style.backgroundColor = colors[colorIndex];

// Function to change color on click
div.addEventListener('click', function() {
  // Update the color index for the next color
  colorIndex = (colorIndex + 1) % colors.length;
  // Change the background color of the div
  div.style.backgroundColor = colors[colorIndex];
});
