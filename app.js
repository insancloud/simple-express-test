const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to my simple API!');
});

// Example API route
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is your data!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for testing
