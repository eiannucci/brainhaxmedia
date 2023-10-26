const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001; // Port for your proxy server

// Define a route to proxy the external API
app.get('/api/bandstats.json', async (req, res) => {
  try {
    // Make a request to the external API
    const response = await axios.get('https://brainhaxmedia.com/api/bandstats.json');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
