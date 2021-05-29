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

  const itemRows = Object.entries(props.quotes).map(([id, quote]) => (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar src="person-icon.png"/>
      </ListItemAvatar>
      <ListItemText
        primary={quote.name}
        secondary={quote.message}
      />
    </ListItem>
  ));

  return (
    <div className="listContainer">
      <Paper style={{padding: 16}}>
        <Typography>
          New Leads
        </Typography>
        <List>
          {itemRows}
          <Divider variant="inset" component="li" />
        </List>
      </Paper>
    </div>
  )
};

export default NewLeads;