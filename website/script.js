document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you for contacting us, ${name}! We'll get back to you at ${email}.`);
  
  // Clear the form
  document.getElementById('contactForm').reset();
});
