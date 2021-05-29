import React, { useState } from 'react';
import './App.css';
import QuoteForm from './QuoteForm';
import PendingQuotes from './PendingQuotes';
import NewLeads from './NewLeads';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import Revenue from './Revenue';
import CloseRatio from './CloseRatio';
import './App.css'

function App() {
  const [quotes, setQuotes] = useState({
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
      closeDate: undefined,
      message: 'Looking for a sunny beach trip'
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
      closeDate: new Date(2021, 5, 8),
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
      closeDate: new Date(2021, 5, 11),
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
      closeDate: new Date(2021, 5, 20),
      message: 'fall in love with Amsterdam'
    }
  });

  return (
    <div className="App">
      <NavBar/>
      <Grid 
        container
        justify="space-around" 
        spacing={5}
      >
        <Grid item xs={5} >
          <QuoteForm setQuotes={setQuotes}/>
        </Grid>
        <Grid item xs={5}>
          <PendingQuotes quotes={quotes}/>
        </Grid>
        <Grid item xs={5}>
          <NewLeads quotes={quotes}/>
        </Grid>
        <Grid item xs={5}>
          <Revenue quotes={quotes}/>
        </Grid>
        <Grid item xs={5}>
          <CloseRatio quotes={quotes}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;