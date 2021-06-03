import React from 'react';
import { Line } from 'react-chartjs-2';
import { Paper } from '@material-ui/core';

// accumulated prices without an invoice 
const Revenue = (props) => {
  const revenueObjs = Object.entries(props.quotes).filter(([id, quote]) => quote.trip_status === "closed")
  const revenues = revenueObjs.map(([id, quote]) => quote.price);
  const dates = revenueObjs.map(([id, quote]) => new Date(quote.close_date).toLocaleDateString('en-US'));

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
      <Paper style={{padding: 16}}>
        <Line data={data} />
      </Paper>
    </div>
  )
};

export default Revenue;