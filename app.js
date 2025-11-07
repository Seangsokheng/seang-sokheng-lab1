const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => { 
res.send('Hello, CI/CD! deployed via GitHub Actions and Railway work work.'); 
}); 
module.exports = app;