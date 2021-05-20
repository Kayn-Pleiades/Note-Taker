// Required Consts
const fs = require('fs'); // Allows interaction with file system
const db = require("../db/db.json")
// Routes
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let pastNotes = JSON.parse(fs.readFileSync(db));
        res.send(pastNotes);
    });

    app.post('/api/notes', (req, res) => {
        let newNote = JSON.parse(fs.readFileSync(db));
        newNote.push(req.body);
        fs.writeFileSync(db, JSON.stringify(newNote), (error) => error ? console.log(error) : console.log("It worked!!"));
        res.send(newNote);
    });
};
