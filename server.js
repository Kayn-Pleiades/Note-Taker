// Needed Consts
const express = require('express');

// Tells node that we are creating an "express" server
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Set our port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listen if our server has started
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  