// Get the div element
const myDiv = document.getElementById("mydiv");

// Add mouseover event listener to change text
myDiv.addEventListener("mouseover", () => {
  myDiv.textContent = "Can I help you?";
});

// Add mouseout event listener to revert text
myDiv.addEventListener("mouseout", () => {
  myDiv.textContent = "Hello World";
});
    
