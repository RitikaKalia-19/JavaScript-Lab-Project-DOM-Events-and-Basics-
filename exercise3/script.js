 // Get the select element and the image element
 const imageSelect = document.getElementById('imageSelect');
 const displayImage = document.getElementById('displayImage');

 // Add event listener to change the image when a new option is selected
 imageSelect.addEventListener('change', function() {
   // Get the selected option value (image path) and text (for alt)
   const selectedOption = imageSelect.options[imageSelect.selectedIndex];
   const newImageSrc = selectedOption.value;
   const newImageAlt = selectedOption.text;

   // Update the image src and alt attributes
   displayImage.src = newImageSrc;
   displayImage.alt = newImageAlt;
 });