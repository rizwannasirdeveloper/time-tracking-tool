const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000; // choose any port you prefer

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'timetrackingdb',
  connectionLimit: 10 // adjust the limit as per your needs
});

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// Create a new time entry
app.post('/time-entries', (req, res) => {
  // Implement the logic to create a new time entry
   const { userId, task, startTime, endTime } = req.body;

  const query = `INSERT INTO time_entries (userId, task, startTime, endTime)
                 VALUES (?, ?, ?, ?)`;

  pool.query(query, [userId, task, startTime, endTime], (error, results) => {
    if (error) {
      console.error('Error creating time entry:', error);
      res.status(500).json({ error: 'Error creating time entry' });
    } else {
      res.status(201).json({ message: 'Time entry created successfully' });
    }
  });
});

// Get a list of all time entries
app.get('/time-entries', (req, res) => {
  // Implement the logic to retrieve all time entries
    const query = 'SELECT * FROM time_entries';

  pool.query(query, (error, results) => {
    if (error) {
      console.error('Error retrieving time entries:', error);
      res.status(500).json({ error: 'Error retrieving time entries' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Get a specific time entry by ID
app.get('/time-entries/:id', (req, res) => {
  // Implement the logic to retrieve a specific time entry by ID
    const { id } = req.params;
  const query = 'SELECT * FROM time_entries WHERE id = ?';

  pool.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error retrieving time entry:', error);
      res.status(500).json({ error: 'Error retrieving time entry' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Time entry not found' });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

// Update a specific time entry by ID
app.put('/time-entries/:id', (req, res) => {
  // Implement the logic to update a specific time entry by ID
    const { id } = req.params;
  const { userId, task, startTime, endTime } = req.body;

  const query = `UPDATE time_entries
                 SET userId = ?, task = ?, startTime = ?, endTime = ?
                 WHERE id = ?`;

  pool.query(query, [userId, task, startTime, endTime, id], (error, results) => {
    if (error) {
      console.error('Error updating time entry:', error);
      res.status(500).json({ error: 'Error updating time entry' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Time entry not found' });
    } else {
      res.status(200).json({ message: 'Time entry updated successfully' });
    }
  });
});

// Delete a specific time entry by ID
app.delete('/time-entries/:id', (req, res) => {
  // Implement the logic to delete a specific time entry by ID
    const { id } = req.params;
  const query = 'DELETE FROM time_entries WHERE id = ?';

  pool.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error deleting time entry:', error);
      res.status(500).json({ error: 'Error deleting time entry' });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ error: 'Time entry not found' });
    } else {
      res.status(200).json({ message: 'Time entry deleted successfully' });
    }
  });
});



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
