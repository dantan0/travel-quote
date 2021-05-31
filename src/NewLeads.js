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
  // const leads = {
  //   "Jane Smith": {
  //     message: "I want to go to Hawaii",
  //     timestamp: "11:30AM",
  //     avatar: "person-icon.png"
  //   },
  //   "Fan Oliver": {
  //     message: "I want to do a scenic road trip",
  //     timestamp: "11:05PM",
  //     avatar: "person-icon.png"
  //   },
  //   "Olivia Doe": {
  //     message: "I want to go to Italy",
  //     timestamp: "1:05PM",
  //     avatar: "person-icon.png"
  //   }
  // };

  // Object.entries(props.quotes).forEach(quote => {
  //   let pastDate = quote.startDate;
  //   pastDate.setDate(pastDate.getDate() + 30);
  //   console.log('all past dates', pastDate);
  //   // const curDate = new Date();
  //   // console.log('hell', quote.startDate.getTime());
  //   return pastDate > new Date()
  // })

  // find leads within the last 60 days
  const itemRows = Object.entries(props.quotes)
    .filter(([id, quote]) => {
        let pastDate = new Date(quote.startDate);
        pastDate.setDate(pastDate.getDate() + 60)
        return pastDate > new Date()
      }
    )
    .map(([id, quote]) => (
    <React.Fragment>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar src="person-icon.png"/>
        </ListItemAvatar>
        <ListItemText
          primary={quote.name}
          secondary={quote.message}
          // secondary={quote.startDate.toString()}
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