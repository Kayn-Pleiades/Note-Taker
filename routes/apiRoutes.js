// Required Consts
const fs = require('fs'); // Allows interaction with file system

// Routes
module.exports = (app) => {
    app.get('/notes', (req, res) => {
        let pastNotes = JSON.parse(fs.readFileSync('./db/db.json'));
        res.send(pastNotes);
    });

    app.post('/notes', (req, res) => {});
};