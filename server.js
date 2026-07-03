const express = require('express');
const path = require('path');
const app = express();

// Lets the server read form data (from your login/register forms)
app.use(express.urlencoded({ extended: true }));

// Serves style.css and any future images/JS from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes for each page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Temporary: just proves the form submits (no saving yet — that's next)
app.post('/login', (req, res) => {
  console.log('Login attempt:', req.body);
  res.send(`You submitted: ${req.body.email}. (Not actually checked yet.)`);
});

app.post('/register', (req, res) => {
  console.log('Register attempt:', req.body);
  res.send(`You submitted: ${req.body.username}, ${req.body.email}. (Not actually saved yet.)`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});