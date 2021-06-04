import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Paper, Typography, Divider } from '@material-ui/core';

const CloseRatio = (props) => {
  const closedQuotes = Object.entries(props.quotes).filter(([id, quote]) => quote.trip_status === 'closed');
  const pendingQuotes = Object.entries(props.quotes).filter(([id, quote]) => quote.trip_status === 'pending');

  const numClosed = Object.keys(closedQuotes).length;
  const numPending = Object.keys(pendingQuotes).length;

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
        <Typography className='header' variant='h5' >
          Close Ratio
        </Typography>
        <Divider style={{marginBottom: 20}}/>
        <Doughnut data={data} />
      </Paper>
    </div>
  );
};

export default CloseRatio;