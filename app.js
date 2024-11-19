const express = require('express');
const app = express();
const path = require('path');

// Handle the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle the about page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Handle the redirect from '/about-me' to '/about'
app.get('/about-me', (req, res) => {
  res.redirect(301, '/about');
});

// Handle 404 page for unmatched routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
