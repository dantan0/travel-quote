import React from 'react';
import { Line } from 'react-chartjs-2';
import { Paper, Divider, Typography } from '@material-ui/core';

// accumulated prices without an invoice 
const Revenue = (props) => {
  const output = {};
  for (const key in props.quotes) {
    const quote = props.quotes[key];
    if (quote.trip_status === 'closed') {
      const date = new Date(quote.close_date).toLocaleDateString();
      console.log('closed date', quote.close_date)
      if (date in output) {
        output[date] += parseInt(quote.price);
      } else {
        output[date] = parseInt(quote.price);
      }
    }
  };

  const dates = Object.keys(output);
  const revenues = Object.values(output);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Revenue",
        data: revenues,
        fill: false,
        borderColor: 'rgb(75, 192, 192)'
      }
    ]
  };

  return (
    <div>
      <Paper style={{ padding: 16 }}>
        <Typography variant='h5'>
          Revenue
        </Typography>
        <Divider style={{marginBottom: 20}}/>
        <Line data={data} />
      </Paper>
    </div>
  )
};

export default Revenue;