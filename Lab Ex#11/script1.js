document.getElementById('myButton').addEventListener('click', function(event) {
  console.log('Event type:', event.type);
  console.log('Target element:', event.target);
  console.log('Button text:', event.target.textContent);
});
