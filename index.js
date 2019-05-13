
const express = require('express')
const app = express()

const route = '/api/persons'

let notes = [
    {
        "name": "Arto Järvinen",
        "number": "044-8374984",
        "id": 1
      },
      {
        "name": "Lea Kutvonen",
        "number": "050-1234567",
        "id": 2
      },
      {
        "name": "Arto Hellas",
        "number": "040-1983571",
        "id": 3
      },
      {
        "name": "Martti Tienari",
        "number": "045-1239876",
        "id": 4
      }
]

app.get(route, (req, res) => {
    res.json(notes)
})
app.get('/info', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(
            `Puhelinluettelossa ${notes.length} henkilön tiedot\n${new Date()}`
        )
})

app.get(`${route}/:id`, (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    if(note) {
        res.json(note)
    } else {
        res.status(404).end()
    }
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})