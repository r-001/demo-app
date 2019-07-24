import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserPlus,faUser,faEye, faIdCard} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    disableUnderline:true

  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbarButtons: {
    marginLeft: 'auto',
    padding:'20px'
  },
  input: {
    display: 'none',
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            JPB
          </Typography>
          <div className={classes.toolbarButtons}>
        
       
      </div>
          
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[<Link to='/' style={{paddingLeft: 13,color:"#0000FF",fontWeight : "550", textDecoration: 'none'}}> &nbsp; <FontAwesomeIcon icon={faHome} /> Home</Link>,
           <Link to='/userprofile/useraccount' style={{paddingLeft: 13,color:"#0000FF",fontWeight : "550", textDecoration: 'none'}} onClick={handleDrawerClose}>&nbsp;<FontAwesomeIcon icon={faUser} />&nbsp;User Account</Link>,
            <Link to='/userprofile/Addbeneficiary' style={{paddingLeft: 13,color:"#0000FF",fontWeight : "550", textDecoration: 'none'}} onClick={handleDrawerClose}>&nbsp;<FontAwesomeIcon icon={faUserPlus} />&nbsp;Add beneficiary</Link>,
             <Link to='/userprofile/Viewbeneficiary'  style={{paddingLeft: 13,color:"#0000FF", fontWeight : "550",textDecoration: 'none'}} onClick={handleDrawerClose}>&nbsp;<FontAwesomeIcon icon={faEye} />&nbsp;View beneficiary</Link>,
             <Link to='/userprofile/contactus' style={{paddingLeft: 13, color:"#0000FF",fontWeight : "550",textDecoration: 'none'}} onClick={handleDrawerClose}>&nbsp;<FontAwesomeIcon icon={faIdCard} />&nbsp;Contact Us </Link>].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })} >
        <div className={classes.drawerHeader} />
        
      </main>
    </div>
  );
}
