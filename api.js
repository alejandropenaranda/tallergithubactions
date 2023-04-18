const express = require('express')
const sum = require('./sum');
const resta = require('./resta');
const multiplicacion = require('./multiplicacion');
const division = require('./division');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('PRUEBA API')
})

app.get('/suma', (req, res) => {
  valor= sum(1,2)
  string="la suma de 1 y 2 es de: " + valor
  res.send(string)
})

app.get('/resta', (req, res) => {
  valor= resta(1,2)
  string="la resta de 1 y 2 es de: " + valor
  res.send(string)
})

app.get('/multiplicacion', (req, res) => {
  valor= multiplicacion(1,2)
  string="la multiplicacion de 1 y 2 es de: " + valor
  res.send(string)
})

app.get('/division', (req, res) => {
  valor= division(1,2)
  string="la division de 1 y 2 es de: " + valor
  res.send(string)
})

app.listen(port)
module.exports = app;