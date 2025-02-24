
function saveNote(){
	//get our value from our form
	const input = document.getElementById("notepad").value;
	
	//Create a section for our note
	const noteSection = document.createElement('section');
	//Define its id
	noteSection.id = "newNote";
	noteSection.className = 'note';

	//Create a paragraph so we can display our input 
	const noteParagraph = document.createElement('p');
	noteParagraph.textContent = input;
  
	//append to our new section
	noteSection.appendChild(noteParagraph);
	
	//Append our section to section in our document
	const notesContainer = document.getElementById('saved');
	notesContainer.appendChild(noteSection);
	
	//Show our button
	document.getElementById('deleteNote').style.display = "block";
	//And alert!
	alert("Note Saved!");
}

function deleteNote(){
	//Get our note(s)
	let note = document.getElementById("newNote");
	while(typeof note !== 'undefined'){
		//Remove it
		note.remove();
		//hide our button
		document.getElementById('deleteNote').style.display = "none";
		note = document.getElementById("newNote");
	}
}

function submitForm() {
	//This prevent default stopped the form from refreshing page, which allows notes to be "saved" - probably could be done by not using a form, but too late :3
    event.preventDefault();
}

//Listeners for our events
document.getElementById("formNotepad").addEventListener('submit', submitForm);

document.getElementById('savenote').addEventListener('click', saveNote);

document.getElementById('deleteNote').addEventListener('click', deleteNote);
