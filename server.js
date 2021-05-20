// Needed Consts
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Tells node that we are creating an "express" server
const app = express();

// Set our port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listen if our server has started
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  