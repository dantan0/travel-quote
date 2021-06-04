import React, { useState } from 'react';
import {
  AppBar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  CssBaseline
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import './App.css';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: '10%',
  },
  drawerPaper: {
    width: drawerWidth
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  }
}));

const NavBar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="home"/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Wet Bat
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true
            }}
          >
          <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
            <CloseIcon/>
          </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
};

export default NavBar;