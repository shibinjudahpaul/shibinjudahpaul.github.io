// Get the copy button element
var copyButton = document.querySelector('#copy-button');

// Add a click event listener to the copy button
copyButton.addEventListener('click', function() {
  // Get the text to copy
  var textToCopy = "shibinjudahpaul@gmail.com";

  // Create a new textarea element and give it the text to copy as its value
  var textarea = document.createElement('textarea');
  textarea.value = textToCopy;

  // Append the textarea element to the document
  document.body.appendChild(textarea);

  // Select the text in the textarea
  textarea.select();

  // Copy the selected text to the clipboard
  document.execCommand('copy');

  // Remove the textarea element from the document
  document.body.removeChild(textarea);

  // Alert the user that the text has been copied
  alert('Email ID copied!');
});
