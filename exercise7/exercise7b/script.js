const songTextInput = document.getElementById('songTextInput');
const addButton = document.getElementById('addButton');
const playlist = document.getElementById('playlist');

// Add event listener to the "Add Song" button
addButton.addEventListener('click', function() {
  const songName = songTextInput.value.trim(); // Get the trimmed value from input

  // Check if the input is non-empty
  if (songName) {
    // Create a new list item for the song
    const listItem = document.createElement('li');

    // Create a text node for the song name
    const songText = document.createTextNode(songName);
    listItem.appendChild(songText); // Add the song name to the list item

    // Create a delete link
    const deleteLink = document.createElement('a');
    deleteLink.href = '#'; 
    deleteLink.textContent = ' [Delete]'; 
    deleteLink.style.color = 'red';
    deleteLink.style.marginLeft = '10px';
    
    // Add event listener to delete the song when the link is clicked
    deleteLink.addEventListener('click', function(event) {
      event.preventDefault(); 
      playlist.removeChild(listItem); 
    });

    // Append the delete link to the list item
    listItem.appendChild(deleteLink);

    // Add the new song to the playlist
    playlist.appendChild(listItem);

    // Clear the input field
    songTextInput.value = '';
  } else {
    alert('Please enter a song name.'); 
  }
});