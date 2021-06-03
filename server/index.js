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

app.get('/api/quotes', (req, res) => {
  pool.query(`SELECT * FROM quotes`, (err, quote_res) => {
    console.log(quote_res.rows);
    res.send(quote_res.rows);
  });
});

app.post('/api/quotes', (req, res) => {
  const text = `INSERT INTO quotes (name, email, from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, people) VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`;
  const {name, email, from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, people} = req.body;
  const values = [name, email, from_city, to_city, depart_date, return_date, transportation, price, trip_message, trip_status, begin_date, people];
  pool.query(text, values, (err, ret_res) => {
    res.send(ret_res);
  });
});

app.listen(port, () => {
  console.log('app listening');
});