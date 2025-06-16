// script.js

// Toggle job description
function toggleDetails(element) {
  const parent = element.closest('.exp-item');
  parent.classList.toggle('active');

  const expanded = parent.classList.contains('active');
  element.setAttribute('aria-expanded', expanded);
}

// Optional: Contact form validation
const contactForm = document.querySelector('.footer-contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
    alert('Thank you for connecting!');
    this.reset();
  });
}