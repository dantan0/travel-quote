const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const { Client, Pool } = require('pg');

const pool = new Client({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'wetbat'
});

pool.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

// app.get('/api/persons', (req, res) => {
//   pool.query(`SELECT * FROM persons;`, (err, person_res) => {
//     console.log(person_res.rows);
//     res.send(person_res.rows);
//   });
// });

app.get('/api/quotes', (req, res) => {
  pool.query(`SELECT * FROM quotes`, (err, quote_res) => {
    console.log(quote_res.rows);
    res.send(quote_res.rows);
  });
});

app.listen(port, () => {
  console.log('app listening');
});