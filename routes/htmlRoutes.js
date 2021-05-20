// Required Consts
const path = require("path");

// Routes
module.exports = (app) => {
    // To notes
    app.get('notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // Default
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};