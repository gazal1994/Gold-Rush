// Server setup
const express = require('express')
const app = express()

const http = require('http')
const GoldRush = require('./server/routes/GoldRush')
const bodyParser = require('body-parser')
const path = require('path');



 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())

 app.use(express.static(path.join(__dirname,'dist')))
 app.use(express.static(path.join(__dirname,'node_modules')))

app.use('/', GoldRush)


const port = 3200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
