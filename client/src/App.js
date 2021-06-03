import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteForm from './QuoteForm';
import PendingQuotes from './PendingQuotes';
import NewLeads from './NewLeads';
import { Grid, Typography } from '@material-ui/core';
import NavBar from './NavBar';
import Revenue from './Revenue';
import PopularDestinations from './PopularDestinations';
import CloseRatio from './CloseRatio';
import './App.css'

const initialData = {
  '50': {
    from: 'Calgary',
    to: 'Hawaii',
    departDate: new Date(2021, 6, 2),
    returnDate: new Date(2021, 6, 10),
    people: '2',
    transportation: 'airplane',
    name: 'Jane Smith',
    email: 'janesmith@gmail.com',
    price: '1000',
    status: 'pending',
    startDate: new Date(2021, 3, 10),
    closeDate: undefined,
    message: 'Looking for a sunny beach trip'
  },
  '60': {
    from: 'Calgary',
    to: 'Hawaii',
    departDate: new Date(2021, 6, 2),
    returnDate: new Date(2021, 6, 10),
    people: '2',
    transportation: 'airplane',
    name: 'Jerry Ho',
    email: 'jerryho@gmail.com',
    price: '1000',
    status: 'pending',
    startDate: new Date(2021, 3, 8),
    closeDate: undefined,
    message: 'beachway get away!'
  },
  '78': {
    from: 'Vancouver',
    to: 'Calgary',
    departDate: new Date(2021, 6, 3),
    returnDate: new Date(2021, 6, 10),
    people: '3',
    transportation: 'tour bus',
    name: 'Fan Oliver',
    email: 'fanoliver@gmail.com',
    price: '4000',
    status: 'closed',
    startDate: new Date(2021, 3, 4),
    closeDate: new Date(2021, 3, 8),
    message: 'cannot wait to do a scenic road trip'
  },
  '90': {
    from: 'Seattle',
    to: 'Venice',
    departDate: new Date(2021, 6, 10),
    returnDate: new Date(2021, 6, 1),
    people: '2',
    transportation: 'cruise ship',
    name: 'Olivia Doe',
    email: 'oliviadoe@hotmail.com',
    price: '3000',
    status: 'pending',
    startDate: new Date(2021, 4, 5),
    closeDate: undefined,
    message: 'time for a classic italian trip!'
  },
  '180': {
    from: 'Vancouver',
    to: 'Beijing',
    departDate: new Date(2021, 7, 5),
    returnDate: new Date(2021, 7, 25),
    people: '3',
    transportation: 'airplane',
    name: 'Tanner Wang',
    email: 'tanner@gmail.com',
    price: '10000',
    status: 'closed',
    startDate: new Date(2021, 3, 1),
    closeDate: new Date(2021, 3, 11),
    message: 'want to explore the forbidden city'
  },
  '230': {
    from: 'Berlin',
    to: 'Amsterdam',
    departDate: new Date(2021, 8, 2),
    returnDate: new Date(2021, 8, 25),
    people: '3',
    transportation: 'airplane',
    name: 'Alice Zinger',
    email: 'alicezinger@gmail.com',
    price: '9000',
    status: 'closed',
    startDate: new Date(2021, 4, 10),
    closeDate: new Date(2021, 4, 20),
    message: 'fall in love with Amsterdam'
  },
  '330': {
    from: 'Berlin',
    to: 'Amsterdam',
    departDate: new Date(2021, 10, 10),
    returnDate: new Date(2021, 10, 17),
    people: '3',
    transportation: 'airplane',
    name: 'Tom Solo',
    email: 'tomsolo@gmail.com',
    price: '9000',
    status: 'closed',
    startDate: new Date(2021, 3, 10),
    closeDate: new Date(2021, 4, 12),
    message: 'see Amsterdam'
  }
};

const axios = require('axios');

function App() {
  const [quotes, setQuotes] = useState({});

  const getQuotes = async() => {
    await fetch('http://localhost:3000/api/quotes')
    .then(async res => {
      const quotes = await res.json();
      setQuotes(quotes);
    })
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="App">
      <NavBar/>
        { quotes && (
          <Grid
            container
            justify="space-around" 
            spacing={3}
          >
            <Grid item xs={5} >
              {/* <Typography>
                Quick Quote
              </Typography> */}
              <QuoteForm setQuotes={setQuotes}/>
            </Grid>

            <Grid item xs={5}>
              {/* <Typography>
                Pending Quotes
              </Typography> */}
              <PendingQuotes quotes={quotes} />
            </Grid>

            <Grid item xs={7}>
              <PopularDestinations className='p' quotes={quotes}/>
              <Revenue quotes={quotes}/>
            </Grid>

            <Grid item xs={3}>
              {/* <Typography>
                New Leads
              </Typography> */}
              <NewLeads quotes={quotes} />
              <CloseRatio quotes={quotes}/>
            </Grid>

          </Grid>
        )}
    </div>
  );
}

export default App;