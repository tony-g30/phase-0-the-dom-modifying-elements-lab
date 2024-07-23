// Remove the main element from the DOM
const mainElement = document.getElementById('main');
mainElement.remove();

// Create a new h1 element and assign it to newHeader
const newHeader = document.createElement('h1');

// Set the id attribute of newHeader to 'victory'
newHeader.id = 'victory';

// Set the text content of newHeader
newHeader.textContent = 'Your Name is the champion';
// Replace 'Your Name' with your actual name as required by the test

// Append newHeader to the body or another a
// Append newHeader to the body or another appropriate parent element
document.body.appendChild(newHeader);