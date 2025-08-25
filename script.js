// Dark mode toggle logic
const toggleBtn = document.getElementById('darkToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// Image zoom modal logic
const plantPhoto = document.querySelector('.plant-image img');
const modal = document.getElementById('modal');
const modalImg = modal.querySelector('img');

plantPhoto.addEventListener('click', () => {
  modal.style.display = 'flex';
  modalImg.src = plantPhoto.src;
  modalImg.alt = plantPhoto.alt;
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.src = '';
  modalImg.alt = '';
});

// Close modal on ESC key press
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape' && modal.style.display === 'flex') {
    modal.style.display = 'none';
    modalImg.src = '';
    modalImg.alt = '';
  }
});
