const mongoose = require('mongoose');
const express = require('express')
const DBmodule = require('./DBmodule')
const mongooseData = require('./mongooseData')
const app = express()
const http = require('http')
const port = 3000

const clientDir = __dirname + "\\Client\\"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(clientDir))

app.get('/', (req, res) => {
  res.sendFile(clientDir + "index.html")
  res.sendFile(clientDir + "css/home.css")

});

app.get('/affarsplan', (req, res) => {
    res.sendFile(clientDir + "affärsplan.html")
    res.sendFile(clientDir + "css/affärsplan.css")
    
  });

  app.get('/halsa', (req, res) => {
    res.sendFile(clientDir + "hälsa.html")
    res.sendFile(clientDir + "css/hälsa.css")
    
  });

  app.get('/oss', (req, res) => {
    res.sendFile(clientDir + "oss.html")
    res.sendFile(clientDir + "css/oss.css")
    
  });

  app.get('/produkt', (req, res) => {
    res.sendFile(clientDir + "produkt.html")
    res.sendFile(clientDir + "css/produkt.css")
    
  });

  app.get('/thanks', (req, res) => {
    res.sendFile(clientDir + "Thanks.html")
    res.sendFile(clientDir + "css/tack.css")
    
  });

  app.get('/varukorg', (req, res) => {
    res.sendFile(clientDir + "varukorg.html")
    res.sendFile(clientDir + "css/varukorg.css")
    
  });

  app.post('/varukorg', (req, res) => {


    var Person = mongooseData.createPerson(req.body.name, req.body.Email, req.body.number, req.body.Stad, req.body.Adress, req.body.Fodelsedag, req.body.Kortnummer, req.body.datum, req.body.sakerhetskod, req.body.ammount);
 
  

    DBmodule.saveInput(Person);

    res.redirect('/thanks');

 });


  
  
  
  app.listen(port, () => console.log(`Example app listening on port port ${port}!`))
  




