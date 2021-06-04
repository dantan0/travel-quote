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
  Typography,
  Box
} from '@material-ui/core';
import './App.css';

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
      <TableContainer component={Paper} style={{ padding: 16, marginBottom: 40 }}>
      <Typography className='header' variant='h5'>
        Pending Quotes
      </Typography>
      <Divider style={{marginBottom: 20}}/>
        <Table >
          <TableHead>
              <TableRow>
                <TableCell>
                  <Typography >
                    <Box fontWeight="fontWeightLight" >Id</Box>
                  </Typography>
                </TableCell>
                <TableCell className='table-header'>
                  <Typography >
                    <Box fontWeight="fontWeightLight">Name</Box>
                  </Typography>
                </TableCell>
                <TableCell className='table-header'>
                  <Typography >
                    <Box fontWeight="fontWeightLight">From</Box>
                  </Typography>
                </TableCell>
                <TableCell className='table-header'>
                  <Typography >
                    <Box fontWeight="fontWeightLight">To</Box>
                  </Typography>
                </TableCell>
                <TableCell className='table-header'>
                  <Typography >
                    <Box fontWeight="fontWeightLight">Price</Box>
                  </Typography>
                </TableCell>
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