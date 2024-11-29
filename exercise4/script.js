// Get references to the form elements and the text div
const fontFamilySelect = document.getElementById('font_family');
const fontSizeSelect = document.getElementById('font_size');
const italicCheckbox = document.getElementById('font_italic');
const boldCheckbox = document.getElementById('font_bold');
const underlineCheckbox = document.getElementById('font_underline');
const textDiv = document.getElementById('text');

// Function to update the text styles
function updateTextStyle() {
  // Update the font family
  textDiv.style.fontFamily = fontFamilySelect.value;
  
  // Update the font size
  textDiv.style.fontSize = fontSizeSelect.value;

  // Update the text styles based on checkbox status
  textDiv.style.fontStyle = italicCheckbox.checked ? 'italic' : 'normal';
  textDiv.style.fontWeight = boldCheckbox.checked ? 'bold' : 'normal';
  textDiv.style.textDecoration = underlineCheckbox.checked ? 'underline' : 'none';
}

// Add event listeners to all the controls
fontFamilySelect.addEventListener('change', updateTextStyle);
fontSizeSelect.addEventListener('change', updateTextStyle);
italicCheckbox.addEventListener('change', updateTextStyle);
boldCheckbox.addEventListener('change', updateTextStyle);
underlineCheckbox.addEventListener('change', updateTextStyle);