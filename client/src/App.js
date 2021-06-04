import React, { useState, useEffect } from 'react';
import QuoteForm from './QuoteForm';
import PendingQuotes from './PendingQuotes';
import NewLeads from './NewLeads';
import { Grid } from '@material-ui/core';
import NavBar from './NavBar';
import Revenue from './Revenue';
import PopularDestinations from './PopularDestinations';
import CloseRatio from './CloseRatio';
import './App.css';

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
              <QuoteForm setQuotes={setQuotes}/>
            </Grid>

            <Grid item xs={5}>
              <PendingQuotes quotes={quotes} />
            </Grid>

            <Grid item xs={7}>
              <PopularDestinations className='p' quotes={quotes}/>
              <Revenue quotes={quotes}/>
            </Grid>

            <Grid item xs={3}>
              <NewLeads quotes={quotes} />
              <CloseRatio quotes={quotes}/>
            </Grid>

          </Grid>
        )}
    </div>
  );
}

export default App;