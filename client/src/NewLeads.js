import React from 'react';
import {
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography
} from '@material-ui/core';

const NewLeads = (props) => {
  // find leads within the last 30 days
  const itemRows = Object.entries(props.quotes)
    .filter(([id, quote]) => {
        let pastDate = new Date(quote.begin_date);
        pastDate.setDate(pastDate.getDate() + 14)
        return pastDate > new Date()
      }
    )
    // .sort((a,b) => new Date(b.begin_date) - new Date(a.begin_date))
    .map(([id, quote]) => (
    <React.Fragment>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar src="person-icon.png"/>
        </ListItemAvatar>
        <ListItemText
          primary={quote.name}
          secondary={quote.trip_message}
          // secondary={new Date(quote.begin_date).toLocaleDateString('en-US')}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  ))

  return (
    <div className="listContainer">
      <Paper style={{padding: 16, marginBottom: 60}}>
        <Typography variant='h5'>
          New Leads
        </Typography>
        <Divider style={{marginBottom: 20}}/>
        <List>
          {itemRows}
        </List>
      </Paper>
    </div>
  )
};

export default NewLeads;