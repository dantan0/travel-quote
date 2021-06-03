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
  console.log('wa', Object.values(props.quotes));

  // find leads within the last 60 days
  const itemRows = Object.entries(props.quotes)
    .filter(([id, quote]) => {
        console.log('this is the quote begin date', quote.begin_date);
        let pastDate = new Date(quote.begin_date);
        pastDate.setDate(pastDate.getDate() + 60)
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
  )).slice(0, 5);

  return (
    <div className="listContainer">
      <Paper style={{padding: 16, marginBottom: 60}}>
        <Typography>
          New Leads
        </Typography>
        <List>
          {itemRows}
        </List>
      </Paper>
    </div>
  )
};

export default NewLeads;