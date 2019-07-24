import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const AdapterLink2 = React.forwardRef((props, ref) => <Link innerRef={ref} {...props}>Home</Link>)
const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props}>Signin</Link>)
const AdapterLink1 = React.forwardRef((props, ref) => <Link innerRef={ref} {...props}>Signup</Link>)


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            JPB
          </Typography>
          <Button component={AdapterLink2} to="/" />
          <Button component={AdapterLink} to="/login/" />
          <Button component={AdapterLink1} to="/signup/" />
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

