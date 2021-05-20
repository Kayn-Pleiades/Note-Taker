// Required Consts
const fs = require('fs'); // Allows interaction with file system

// Routes
module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        let pastNotes = JSON.parse(fs.readFileSync('db/db.json'));
        res.send(pastNotes);
    });

    app.post('/api/notes', (req, res) => {
        let newNote = JSON.parse(fs.readFileSync('db/db.json'));
        newNote.push(req.body);
        fs.writeFileSync('db/db.json', JSON.stringify(newNote));
        res.send(newNote);
    });
};
