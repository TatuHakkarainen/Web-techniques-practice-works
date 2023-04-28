function saveNote() {
  const name = document.getElementById('name'); // Retrieves the element with the id 'name'
  const message = document.getElementById('message'); // Retrieves the element with the id 'message'
  const important = document.getElementById('important').checked; // Checks if the checkbox is selected
  const date = new Date().toLocaleString(); // Retrieves the current date and time

  const note = document.createElement('li'); // Creates a new li element

  // Sets the content of the li element using the name, message, and date variables
  note.innerHTML = `(${date}) <strong>${name.value}</strong>: <br> ${message.value}`;

  if (important) {
    note.style.border = '2px solid red'; // Adds a red border if the checkbox is selected
  }

  document.getElementById('notes').appendChild(note); // Adds the note to the list with the id 'notes'

  // Clears the text fields
  name.value = '';
  message.value = '';
}
