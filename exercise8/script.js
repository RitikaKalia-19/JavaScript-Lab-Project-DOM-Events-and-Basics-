// Function to convert hex color to RGB format
function hexToRgb(hex) {
  // Remove the hash symbol (#) if present
  hex = hex.replace("#", "");

  // Convert the hex values to RGB values
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}

function initGrid() {
  // Collect colors in an array
  var colors = [];
  var range = ["00", "33", "66", "99", "cc", "ff"];

  for (var r = 0; r < range.length; r++) {
    for (var g = 0; g < range.length; g++) {
      for (var b = 0; b < range.length; b++) {
        colors.push("#" + range[r] + range[g] + range[b]);
      }
    }
  }

  // Create color tiles and add them to the colors div
  var colorsDiv = document.getElementById("colors");

  colors.forEach(function(color) {
    // Create a tile (div) for each color
    var colorTile = document.createElement("div");
    colorTile.style.backgroundColor = color;
    colorTile.style.width = "20px"; // Set width for the tile
    colorTile.style.height = "20px"; // Set height for the tile
    colorTile.style.display = "inline-block"; // Align tiles inline
    colorTile.style.cursor = "pointer"; // Change cursor to pointer
    colorTile.title = color; // Show color code on hover

    // Add click event to the tile
    colorTile.addEventListener("click", function() {
      var selectedDiv = document.getElementById("selected");
      var rgbColor = hexToRgb(color); // Convert to RGB format
      selectedDiv.style.backgroundColor = color; // Set background color
      selectedDiv.textContent = rgbColor; // Display RGB code
    });

    // Append the color tile to the colors div
    colorsDiv.appendChild(colorTile);
  });
}

window.onload = function() {
  initGrid();
}
