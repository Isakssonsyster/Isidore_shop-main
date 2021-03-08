const mongoose = require('mongoose')


const personSchema = new mongoose.Schema({

    name: String,
    Email: String,
    number: String,
    Stad: String,
    Adress: String,
    Fodelsedag: Date,
    Kortnummer: String,
    datum: Date,   
    säkerhetskod: String,
    ammount: Number
  
  })
  
  const Person = mongoose.model('Person', personSchema);
  
  exports.createPerson = (name, Email, number, Stad, Adress, Fodelsedag, Kortnummer, datum, sakerhetskod, ammount) => {
      var person = new Person({
         
          name: name,
          Email: Email,
          number: number,
          Stad: Stad,
          Adress: Adress,
          Fodelsedag: Fodelsedag,
          Kortnummer: Kortnummer,
          datum: datum,   
          sakerhetskod: sakerhetskod,
          ammount: ammount
      })
  
      return person
  }

exports.getMessages = async() => {
    var data = await Data.find({});

    return data
}