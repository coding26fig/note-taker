const express = require("express")
const notes = express.Router()
let db = require('../db/db.json')
const fs = require("fs")
const { v4: uuidv4 } = require("uuid");
const { json } = require("express");
const path = require('path')

notes.get('/notes', (req, res) => {
    res.json(db)
})

notes.post("/notes", (req, res) => {
  
  const newNote = {
    ...req.body,
    id: uuidv4()
  }

  db.push(newNote)

  fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(db), function(err, data) {
    if(err) {
      console.log(err)
      res.sendStatus(500)
      return
    }
    res.json(newNote)
  })
})


notes.delete('/notes/:id', (req, res) => {

  db = db.filter(note=> {

    if(req.params.id != note.id) {
      return note
    }
  })


  fs.writeFile(
    path.join(__dirname, "..", "db", "db.json"),
    JSON.stringify(db),
    function (err, data) {
      if (err) {
        console.log(err);
        res.sendStatus(500);
        return;
      }
      res.sendStatus(200);
    }
  );

})



module.exports = notes