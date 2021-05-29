import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@material-ui/core';

const PendingQuotes = (props) => {
  const quoteRows = Object.entries(props.quotes)
    .filter(([id, quote]) => quote.status === 'pending')
    .map(([id, quote]) => (
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{quote.name}</TableCell>
        <TableCell>{quote.from}</TableCell>
        <TableCell>{quote.to}</TableCell>
        <TableCell>{quote.price}</TableCell>
      </TableRow>
    ));

  return (
    <div className="tableContainer">
      <TableContainer component={Paper} style={{padding: 16}}>
          <Typography
          >
            Pending Quotes
          </Typography>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>From</TableCell>
              <TableCell>To</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quoteRows}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
};

export default PendingQuotes;