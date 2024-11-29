// Function to show/hide content
function toggleContent(event) {
  event.preventDefault(); // Prevent the default anchor behavior
  const isShowLink = event.target.classList.contains('show');
  const article = event.target.closest('article'); // Find the closest article element
  const contentDiv = article.querySelector('.text'); // Get the content div
  
  if (isShowLink) {
    contentDiv.style.display = 'block'; // Show the content
    event.target.style.display = 'none'; // Hide the show link
  } else {
    contentDiv.style.display = 'none'; // Hide the content
    article.querySelector('.show').style.display = 'inline'; // Show the show link
  }
}

// Add event listeners to all show and hide links
document.querySelectorAll('.show, .hide').forEach(link => {
  link.addEventListener('click', toggleContent);
});