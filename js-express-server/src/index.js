const express = require('express');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = 8001;

// Parse JSON bodies
app.use(express.json());

// Mount tasks router at root so routes are exactly: GET /, GET /tasks, POST /tasks
app.use('/', tasksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});