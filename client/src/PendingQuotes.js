import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Typography
} from '@material-ui/core';

const PendingQuotes = (props) => {
  const quoteRows = Object.entries(props.quotes)
    .filter(([id, quote]) => quote.trip_status === 'pending')
    .map(([id, quote]) => (
      <TableRow>
        <TableCell>{id}</TableCell>
        <TableCell>{quote.name}</TableCell>
        <TableCell>{quote.from_city}</TableCell>
        <TableCell>{quote.to_city}</TableCell>
        <TableCell>{quote.price}</TableCell>
      </TableRow>
    ));

  return (
    <div className="tableContainer">
      <TableContainer component={Paper} style={{padding: 16}}>
      <Typography variant='h5'>
        Pending Quotes
      </Typography>
      <Divider style={{marginBottom: 20}}/>
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