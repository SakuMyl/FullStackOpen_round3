
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')
const bodyParser = require('body-parser')

const route = '/api/persons'

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

const errorHandler = (error, req, res, next) => {

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }

  next(error)
}

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
  Person.find({}).then(result =>
    res.end(`Puhelinluettelossa ${result.length} henkilön tiedot\n${new Date()}`)
  )
})

app.get(`${route}/:id`, (req, res, next) => {
  Person.findById(req.params.id)
    .then(person => {
      if(person) {
        res.json(person.toJSON())
      } else{
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete(`${route}/:id`, (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(result =>
      res.status(204).end()
    )
    .catch(error => next(error))
})

app.put(`${route}/:id`, (req, res, next) => {
  const body = req.body
  const person = {
    name: body.name,
    number: body.number
  }
  Person.findByIdAndUpdate(req.params.id, person)
    .then(oldPerson => {
      if(oldPerson) {
        return res.json(oldPerson.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})
app.post(route, (req, res, next) => {
  const body = req.body

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(result =>
    res.json(result.toJSON())
  )
    .catch(error => next(error))
})

app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})