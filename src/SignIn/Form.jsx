import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      /* backgroundColor: theme.palette.secondary.main, */
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export const Form = props => {

    const classes = useStyles();

  const {
    values: {email, password,  },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    handleBlur
  } = props;
  /* console.table(props); */

  
  return (
     <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} style={{backgroundColor:"blue"}}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          SignIn
        </Typography>
    <form onSubmit={handleSubmit}     className={classes.form}>
      
      <TextField
      variant="outlined"
      margin="normal"
        name="email"
        error={Boolean(touched.email&&errors.email)}
        label="Email"
        id="email"
        fullWidth
        value={email}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        onBlur={handleBlur}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          )
        }}
      />
       
     <div> {(touched.email && errors.email ) }</div>  
      <TextField
      variant="outlined"
      margin="normal"
        name="password"
        error={Boolean(  touched.password && errors.password)}
        label="Password"
        fullWidth
        type="password"
        autoComplete="off"
        value={password}
        onBlur={handleBlur}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          )
        }}
      />
      <div> {(touched.password && errors.password ) }</div> 
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
            color="primary"
            className={classes.submit}
        disabled={!isValid}
      >
        Submit
      </Button>
      <Grid container>
            
            <Grid item>
              <Link to='/signup' variant="body2">
                {"Don't have an account? SignUp"}
              </Link>
            </Grid>
          </Grid>
    </form>
    </div>
    </Container>
  );
};
