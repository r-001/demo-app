import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';

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
   
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
}));

const Form = props => {

  const classes = useStyles();

  const {
    values: { name, email, password, confirmPassword },
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
        <Avatar className={classes.avatar} style={{backgroundColor:"blue"}} >
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5">
          Signup
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            autoFocus
            variant="outlined"
            name="name"
            error={Boolean(touched.name && errors.name)}
            label="Name"
            id="name"
            value={name}
            onBlur={handleBlur}
            onChange={handleChange}
            fullWidth
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NameIcon />
                </InputAdornment>
              )
            }}
          />
          <FormHelperText id="name">{(touched.name && errors.name ) }</FormHelperText>
        {/* <div> {(touched.name && errors.name ) }</div> */} <br></br>
          
          <TextField
            variant="outlined"
            name="email"
            error={Boolean(touched.email && errors.email)}
            label="Email"
            fullWidth
            autoComplete="off"
            value={email}
             onChange={handleChange} 
            onBlur={handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              )
            }}
          />
          <FormHelperText id="name">{(touched.email && errors.email ) }</FormHelperText>
        {/* <div> {(touched.email && errors.email ) }</div> */} <br></br>
          <TextField
            variant="outlined"
            name="password"
            error={Boolean( touched.password&&errors.password)}
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
          <FormHelperText id="name">{(touched.password && errors.password ) }</FormHelperText>
          {/* <div> {(touched.password && errors.password ) }</div> */} <br></br>
          <TextField
            variant="outlined"
            name="confirmPassword"
            error={Boolean(touched.confirmPassword && errors.confirmPassword)}
            label="Confirm Password"
            autoComplete="off"
            fullWidth
            type="password"
            value={confirmPassword}
            onChange={handleChange}

             onBlur={handleBlur} 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              )
            }}
          />
          <FormHelperText id="name">{(touched.confirmPassword && errors.confirmPassword ) }</FormHelperText>
         {/* <div> {(touched.confirmPassword && errors.confirmPassword ) }</div>  */}
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
              <Link to='/login' variant="contained">
                {"If you already  have an account? SignIn"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Form;
