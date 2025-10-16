const express = require('express');
const router = express.Router();

// In-memory tasks list mirroring the FastAPI initial data
const tasks = [
  'Write a diary entry from the future',
  'Create a time machine from a cardboard box',
  'Plan a trip to the dinosaurs',
  'Draw a futuristic city',
  'List items to bring on a time-travel adventure'
];

// GET / -> returns plain string "Hello World"
router.get('/', async (req, res) => {
  try {
    // Return exactly the string as in FastAPI
    return res.status(200).send('Hello World');
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /tasks -> returns JSON { tasks: [...] }
router.get('/tasks', async (req, res) => {
  try {
    return res.status(200).json({ tasks });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST /tasks -> accepts { text: string }
router.post('/tasks', async (req, res) => {
  try {
    const body = req.body || {};
    const text = body.text;
    if (typeof text !== 'string') {
      return res.status(400).json({ error: 'Invalid payload: text is required and must be a string' });
    }
    tasks.push(text);
    return res.status(200).json({ message: 'Task added successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
