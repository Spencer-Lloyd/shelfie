const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

massive( process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('db is connected')
}).catch(err => {
    console.log(err)
})

app.use(bodyParser.json())

const controller = require('./controller')

app.post('/api/todos', controller.createItem)

var app = express()

const port = 4000
app.listen( port, () => {console.log(`Server listening on port ${port}.`)})