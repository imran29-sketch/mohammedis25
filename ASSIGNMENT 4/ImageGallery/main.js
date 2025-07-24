// Name: imran mohammed
// File: main.js
// Date: 22 July 2025
// Description: JavaScript for dynamic image gallery with thumbnails and darken/lighten toggle.


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Array of images and alt text
const imageList = [
  { src: 'images/pic1.jpg', alt: 'Closeup of a human eye' },
  { src: 'images/pic2.jpg', alt: 'Rock that looks like a wave' },
  { src: 'images/pic3.jpg', alt: 'Purple and white pansies' },
  { src: 'images/pic4.jpg', alt: 'Section of wall from a pharaoh\'s tomb' },
  { src: 'images/pic5.jpg', alt: 'Large moth on a leaf' }
];

// Loop through images to create thumbnails
for (const image of imageList) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image.src);
  newImage.setAttribute('alt', image.alt);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', image.src);
    displayedImage.setAttribute('alt', image.alt);
  });
}

// Button functionality to toggle overlay
btn.addEventListener('click', () => {
  const className = btn.getAttribute('class');
  if (className === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
