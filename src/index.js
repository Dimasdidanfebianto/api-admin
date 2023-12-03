const mysql = require('mysql2');
const express = require('express');

const app = express();

const booksRoute = require('./routes/books');


const middlewareLogRequest = require('./middleware/log');

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/books', booksRoute);

app.use('/', (req, res) => {
  
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
