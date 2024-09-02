const express = require('express');
const app = express();
const port1 = 2800;
const port2 = 2801;

// Middleware to parse JSON bodies
app.use(express.json());

// Mock API endpoint that accepts POST requests
app.post('/mock-data', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // Mock response
  res.json({
    message: 'Data received successfully',
    receivedData: receivedData
  });
});

app.get('/mock-data', (req, res) => {

  // Mock response
  res.json({
    message: 'Data received successfully',
  });
});

// Start the server
app.listen(port1, () => {
  console.log(`Mock API listening at http://localhost:${port1}`);
});


app.listen(port2, '0.0.0.0', () => {
  console.log(`Mock API listening at http://0.0.0.0:${port2}`);
});

