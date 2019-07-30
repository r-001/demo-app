import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import  Form  from "./components/Form";
import Paper from "@material-ui/core/Paper";
import EmailValidator from '../common/validator/emailValidator';
import NameValidator from '../common/validator/nameValidator';
import PasswordValidator from '../common/validator/passwordValidator'
import * as Yup from "yup";
const axios = require('axios');


const styles = theme => ({

});



const validationSchema = Yup.object({
        name: NameValidator(),
        email: EmailValidator(),
        password: PasswordValidator(),
        confirmPassword: Yup.string("Enter your password")
          .required("Confirm your password")
          .oneOf([Yup.ref("password")], "Password does not match")
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = (values) => {


    axios.post('http://localhost:3002/users', values)
      .then(function (response) {
        alert(response);
      });

  };

  render() {
    const values = { name: "", email: "", confirmPassword: "", password: "" };
    return (
      <React.Fragment>
        <div >
          <Paper elevation={0} >

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
