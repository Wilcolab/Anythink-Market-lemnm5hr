const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.json());

// Import routes
const routes = require('./routes/index');
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});