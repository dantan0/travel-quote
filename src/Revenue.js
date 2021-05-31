import React from 'react';
import { Line } from 'react-chartjs-2';
import { Paper } from '@material-ui/core';

// accumulated prices without an invoice 
const Revenue = (props) => {
  const revenueObjs = Object.entries(props.quotes).filter(([id, quote]) => quote.status === "closed")
  const revenues = revenueObjs.map(([id, quote]) => quote.price);
  // const allOrders = Object.entries(props.quotes).forEach(([id, quote]) => quote.price);
  // const orderPrices = Object.entries(prop.quotes).forEach(([id, quote]) => quote.startDate);
  const dates = revenueObjs.map(([id, quote]) => quote.closeDate.toLocaleDateString('en-US'));

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