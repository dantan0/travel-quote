import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const CloseRatio = (props) => {
  const closedQuotes = Object.entries(props.quotes).filter(([id, quote]) => quote.status === 'closed');
  const pendingQuotes = Object.entries(props.quotes).filter(([id, quote]) => quote.status === 'pending');

  const numClosed = Object.keys(closedQuotes).length;
  const numPending = Object.keys(pendingQuotes).length;
  // const numTotal = numClosed + numPending;

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
      <Doughnut data={data} />
    </div>
  );
};

export default CloseRatio;