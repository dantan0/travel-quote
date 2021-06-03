import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Paper } from '@material-ui/core';

const CloseRatio = (props) => {
  console.log('from close ratio quotes', props.quotes);
  console.log('these are object entries from close ratio', Object.entries(props.quotes));
  const closedQuotes = Object.entries(props.quotes).filter(([id, quote]) => quote.trip_status === 'closed');
  const pendingQuotes = Object.entries(props.quotes).filter(([id, quote]) => quote.trip_status === 'pending');

  const numClosed = Object.keys(closedQuotes).length;
  const numPending = Object.keys(pendingQuotes).length;

  console.log(numClosed, numPending);

  const data = {
    datasets: [{
      data: [numClosed, numPending],
      backgroundColor: ["#336699","#99CCFF",]
    }],
    labels: [
      'Closed',
      'Pending'
    ]
  };

  return (
    <div>
      <Paper style={{padding: 16}}>
        <Doughnut data={data} />
      </Paper>
    </div>
  );
};

export default CloseRatio;