import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Call from "@material-ui/icons/Call";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
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
    values: { name, bankname, accountnumber, ifsccode,mobilenumber },
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
          Create Beneficiary
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
          <FormHelperText id="name">{(touched.name && errors.name ) }</FormHelperText><br></br>

          <TextField
            variant="outlined"
            name="bankname"
            error={Boolean(touched.bankname && errors.bankname)}
            label="Bank Name"
            id="bankname"
            value={bankname}
            onBlur={handleBlur}
            onChange={handleChange}
            fullWidth
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBalance />
                </InputAdornment>
              )
            }}
          />
          <FormHelperText id="bankname">{(touched.bankname && errors.bankname ) }</FormHelperText>
          <br></br>
          <TextField
            variant="outlined"
            name="accountnumber"
            error={Boolean(touched.accountnumber && errors.accountnumber)}
            label="Account Number"
            id="accountnumber"
            value={accountnumber}
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
          <FormHelperText id="accountnumber">{(touched.accountnumber && errors.accountnumber ) }</FormHelperText>
          <br></br>
          <TextField
            variant="outlined"
            name="ifsccode"
            error={Boolean(touched.ifsccode && errors.ifsccode)}
            label="IFSC Code"
            id="ifsccode"
            value={ifsccode}
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
          
          <FormHelperText id="ifsccode">{(touched.ifsccode && errors.ifsccode ) }</FormHelperText>
          <br></br>
          <TextField
            variant="outlined"
            name="mobilenumber"
            error={Boolean(touched.mobilenumber && errors.mobilenumber)}
            label="Mobile Number"
            id="mobilenumber"
            value={mobilenumber}
            onBlur={handleBlur}
            onChange={handleChange}
            fullWidth
            autoComplete="off"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Call />
                </InputAdornment>
              )
            }}
          />
          <FormHelperText id="mobilenumber">{(touched.mobilenumber && errors.mobilenumber ) }</FormHelperText>
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
          
        </form>
      </div>
    </Container>
  );
};

export default Form;
