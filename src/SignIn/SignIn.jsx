import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./Form";
import Paper from "@material-ui/core/Paper";
import PasswordValidator from '../common/validator/passwordValidator'
import EmailValidator from '../common/validator/emailValidator';
import * as Yup from "yup";

const styles = theme => ({
   
});

const validationSchema = Yup.object({
  
  email:EmailValidator() ,
  password: PasswordValidator()
  
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = data => {
    console.log(data);
  };

  render() {
    const classes = this.props;
    const values = {  email: "",  password: "" };
    return (
      <React.Fragment>
        <div >
          <Paper elevation={0} className={classes.paper}>
            
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={this.submit}
            />
          </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);
