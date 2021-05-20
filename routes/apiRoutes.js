// Required Consts
const noteBook = require('../db/noteBook');

// Routes
module.exports = (app) => {
    app.get('/notes', (req, res) => res.json(notes));

    app.post('/notes', (req, res) => {});
}
  