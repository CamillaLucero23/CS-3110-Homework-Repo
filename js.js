//GET
const refreshNotes = () => {
	fetch('/api')
	.then(body => body.json())
	.then(notes => {
		notes.forEach((note) => {
			const paragraph = document.createElement('p')
			paragraph.contains("<p>There is a note</p>")
			document.body.append(paragraph)
		}
	})
}

refreshNotes()

//POST
document.getElementById("POST").addEventListener(
  'click',
  (ev) => {
    const { width, height } = document.body.getBoundingClientRect()
    const x = ev.x / width * 100
    const y = ev.y / height * 100
    const name = document.querySelector('select').value
    fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ name, x, y })
    }).then(refreshDancers)
  }
)
