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

app.get('/api/persons', (req, res) => {
  pool.query(`SELECT * FROM persons;`, (err, person_res) => {
    console.log(person_res.rows);
    res.send(person_res.rows);
  });
});

app.get('/api/quotes', (req, res) => {
  pool.query(`SELECT * FROM quotes`, (err, quote_res) => {
    console.log(quote_res.rows);
    res.send(quote_res.rows);
  });
});

// app.post('/api/quotes', (req, res) => {
//   const text = `INSERT INTO quotes (from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, person_id) VALUES 
//   ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) VALUES RETURNING *`;
//   const { from, to, departDate, returnDate, people, transportation, price, status, message, startDate } = req.body;
//   const values = [from, to, departDate, returnDate, people, transportation, price, status, message, startDate];
//   pool.query(text, values, (err, res) => {
//     console.log(res.rows[0]);
//   });
// });

app.listen(port, () => {
  console.log('app listening');
});