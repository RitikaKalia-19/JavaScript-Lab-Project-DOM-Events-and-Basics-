const songTextInput = document.getElementById('songTextInput');
const addButton = document.getElementById('addButton');
const playlist = document.getElementById('playlist');

// Add event listener to the "Add Song" button
addButton.addEventListener('click', function() {
  const songName = songTextInput.value.trim(); 

  // Check if the input is non-empty
  if (songName) {
    // Create a new list item for the song
    const listItem = document.createElement('li');
    listItem.textContent = songName;

    // Add the new song to the playlist
    playlist.appendChild(listItem);

    // Clear the input field
    songTextInput.value = '';
  } else {
    alert('Please enter a song name.');
  }
});