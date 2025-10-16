const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 8001;

// Parse JSON bodies
app.use(express.json());

// Mount router at root so it serves /, /tasks
app.use('/', tasksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;