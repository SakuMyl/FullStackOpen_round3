
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

const route = '/api/persons'

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(cors())

app.use(morgan((tokens, req, res) => {
    let t = [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ]
    if(tokens.method(req, res) === 'POST') {
        t = t.concat(JSON.stringify(req.body))
    }
    return t.join(' ')
}))
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

app.get('/', (req, res) => {
    res.send('Hello Docker!')
})
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

app.delete(`${route}/:id`, (req, res) => {
    const id = Number(req.params.id)
    
    notes = notes.filter(note => note.id !== id)
    res.status(204).end()
})

app.post(route, (req, res) => {
    const id = Math.ceil(Math.random() * 10000)
    const body = req.body

    const note = {
        name: body.name,
        number: body.number,
        id
    }
    if(!body.name) {
        return res.status(400).json({
            error: 'missing a name'
        })
    }
    if(!body.number) {
        return res.status(400).json({
            error: 'missing a number'
        })
    }
    if(notes.find(n => n.name === note.name)) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }
    notes = notes.concat(note)
    
    res.json(note)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})