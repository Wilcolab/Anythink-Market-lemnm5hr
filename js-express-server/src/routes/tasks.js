const express = require('express');

const router = express.Router();

// In-memory tasks array (migrated from FastAPI)
const tasks = [
  'Write a diary entry from the future',
  'Create a time machine from a cardboard box',
  'Plan a trip to the dinosaurs',
  'Draw a futuristic city',
  'List items to bring on a time-travel adventure'
];

// GET / -> returns a simple Hello World string to match FastAPI
router.get('/', (req, res) => {
  res.send('Hello World');
});

// GET /tasks -> return tasks as JSON { tasks: [...] }
router.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// POST /tasks -> accept body { text: string } and append to tasks
router.post('/tasks', (req, res) => {
  const { text } = req.body || {};
  if (typeof text !== 'string' || text.trim() === '') {
    // Use 422 to resemble FastAPI's validation response status for invalid input
    return res.status(422).json({ detail: 'Invalid task payload' });
  }
  tasks.push(text);
  return res.json({ message: 'Task added successfully' });
});

module.exports = router;
