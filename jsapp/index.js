#!/usr/bin/env node

const http = require('http')

const notes = []

const handleRequest = (req, res) => {
  if (req.method === 'POST') {
	 
	console.log("Method = 'POST'")
    let body = ''

    req.on('data', (data) => {
      body += data
    })

    req.on('end', () => {
      const params = Object.fromEntries(body.split('&').map(
        (param) => param.split('=')
      ))

      if (!params.notePOST) {
        res.writeHead(400, { 'Content-Type': 'text/plain' })
        res.end('Bad Request: note parameters are required')
      } else {
        notes.push(params)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(params))
      }
    })

  } else if (req.method === 'GET') {
	console.log("Method = 'GET'")

    const url = new URL(req.url, `http://${req.headers.host}`)
    const search = url.searchParams.get('note')
	console.log("search = " + search)

    let result = notes

    if (search) {
      result = notes.filter(note => note.notePOST.includes(search))
    }

    if (result.length !== 0) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(result))
	  console.log("Found, return 200")
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('404: Not Found | No notes atching the search criteria or no notes have been entered')
	  console.log("Not Found, return 404")
    }

  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' })
    res.end('405: Method Not Allowed')
	console.log("Method not allowed, return 405")
  }
}

const server = http.createServer(handleRequest)
server.listen(3000, () => {
  console.log('Server listening on port 3000')
})