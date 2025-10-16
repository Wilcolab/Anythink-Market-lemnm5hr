const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 8001;

// Middleware for logging
app.use(morgan('dev'));

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});