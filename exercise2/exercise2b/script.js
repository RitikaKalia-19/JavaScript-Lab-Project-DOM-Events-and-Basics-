 // Define an array of arbitrary colors
 const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink'];

 // Function to get a random index from the colors array
 function getRandomColorIndex() {
   return Math.floor(Math.random() * colors.length);
 }

 // Get reference to the div element
 const div = document.getElementById('mydiv');

 // Set the initial color to a random color from the array
 let colorIndex = getRandomColorIndex();
 div.style.backgroundColor = colors[colorIndex];

 // Function to change color on click
 div.addEventListener('click', function() {
   // Update the color index to the next color, looping back after the last one
   colorIndex = (colorIndex + 1) % colors.length;
   // Change the background color of the div
   div.style.backgroundColor = colors[colorIndex];
 });