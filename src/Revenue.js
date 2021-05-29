import React from 'react';
import { Line } from 'react-chartjs-2';
import { Paper } from '@material-ui/core';

// accumulated prices without an invoice 
const Revenue = (props) => {
  const revenueObjs = Object.entries(props.quotes).filter(([id, quote]) => quote.status === "closed")
  console.log(revenueObjs);
  const revenues = revenueObjs.map(([id, quote]) => quote.price);
  const dates = revenueObjs.map(([id, quote]) => quote.closeDate.toLocaleDateString('en-US'));

  const data = {
    labels: dates,
    datasets: [{
      label: "Revenue",
      data: revenues,
      fill: false,
      borderColor: 'rgb(75, 192, 192)'
    }]
  };

  return (
    <div>
      {/* <Paper > */}
        <Line data={data} />
      {/* </Paper> */}
    </div>
  )
};

export default Revenue;