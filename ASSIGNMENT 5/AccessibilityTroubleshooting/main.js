document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#toggle-comments');
  const comments = document.querySelector('.comments');

  comments.style.display = 'none';
  button.setAttribute('aria-expanded', 'false');

  button.addEventListener('click', () => {
    const isVisible = comments.style.display === 'block';

    comments.style.display = isVisible ? 'none' : 'block';
    button.setAttribute('aria-expanded', !isVisible);
    button.textContent = isVisible ? 'Show comments' : 'Hide comments';
  });
});
