document.getElementById('webForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  document.getElementById('output').innerHTML = `<strong>Submitted Info:</strong><br>Name: ${name}<br>Email: ${email}<br>Message: ${message}`;
});