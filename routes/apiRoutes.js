// Required Consts
const fs = require('fs'); // Allows interaction with file system

// Routes
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let pastNotes = JSON.parse(fs.readFileSync('./public/db/db.json'));
        res.send(pastNotes);
    });

    app.post('/api/notes', (req, res) => {
        let newNote = JSON.parse(fs.readFileSync('./public/db/db.json'));
        newNote.push(req.body);
        fs.writeFileSync('./public/db/db.json', JSON.stringify(newNote), (error) => error ? console.log(error) : console.log("It worked!!"));
        res.send(newNote);
    });
};
