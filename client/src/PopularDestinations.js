import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Paper, Divider, Typography } from '@material-ui/core';

const findFrequencies = function(quotes) {
  const freq = {};

  for (const quote of Object.values(quotes)) {
    if (quote.to_city in freq) {
      freq[quote.to_city] += 1;
    }
    else {
      freq[quote.to_city] = 1;
    }
  }

  return freq;
};

const colorArr = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(255, 159, 64, 0.2)',
  'rgba(255, 205, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(201, 203, 207, 0.2)'
];

const borderColorArr = [
  'rgb(255, 99, 132)',
  'rgb(255, 159, 64)',
  'rgb(255, 205, 86)',
  'rgb(75, 192, 192)',
  'rgb(54, 162, 235)',
  'rgb(153, 102, 255)',
  'rgb(201, 203, 207)'
];

const PopularDestinations = (props) => {
  const freq = findFrequencies(props.quotes);

  const labels = Object.keys(freq);
  const counts = Object.values(freq);

  const data = {
    labels: labels,
    datasets: [
      {
        axis: 'y',
        label: 'travel count',
        data: counts,
        backgroundColor: colorArr,
        borderColor: borderColorArr,
        borderWidth: 1,
      }
    ]
  };

  return (
    <div>
      <Paper style={{padding: 16, marginBottom: 40 }}>
      <Typography className='header' variant='h5'>
          Popular Destinations
        </Typography>
        <Divider style={{marginBottom: 20}}/>
        <Bar 
          data={data}
          options={{
            indexAxis: 'y',
            legend: {
              display: true
            }
          }}
        />
      </Paper>
    </div>
  );
};

export default PopularDestinations;