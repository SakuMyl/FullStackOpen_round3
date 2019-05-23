
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

const route = '/api/persons'

const bodyParser = require('body-parser')

app.use(express.static('./build'))
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


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get(route, (req, res) => {
    Person.find({}).then(result => 
        res.json(result)
    )
})
app.get('/info', (req, res) => {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(
            `Puhelinluettelossa ${notes.length} henkilön tiedot\n${new Date()}`
        )
})

app.get(`${route}/:id`, (req, res) => {
    Person.findById(req.params.id)
        .then(result => {
            console.log(result)
            return res.json(result)
        })
        .catch(err =>
            res.status(404).end()
        )
})

app.delete(`${route}/:id`, (req, res) => {
    Person.findByIdAndDelete(req.params.id)
        .then(result => 
            res.status(204).end()
        )
})

app.put(`${route}/:id`, (req, res) => {
    const body = req.body
    const person = {
        name: body.name,
        number: body.number
    }
    Person.findByIdAndUpdate(req.params.id, person)
        .then(result =>
            res.json(result.toJSON())
        )
        .catch(err => 
            res.status(404).end()
        )
})
app.post(route, (req, res) => {
    const body = req.body

    const person = new Person({
        name: body.name,
        number: body.number
    })
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
    person.save().then(result =>
        res.json(result.toJSON())
    )
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})