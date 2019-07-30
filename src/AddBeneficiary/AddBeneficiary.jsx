import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import  Form  from "./components/Form";
import Paper from "@material-ui/core/Paper";
import nameValidator from '../common/validator/nameValidator';
import banknameValidator from'../common/validator/banknameValidator';
import accountnumberValidator from'../common/validator/accountnumberValidator';
import mobilenumberValidator from'../common/validator/mobilenumberValidator';
import ifsccodeValidator from'../common/validator/ifsccodeValidator';

import * as Yup from "yup";
const axios = require('axios');


const styles = theme => ({

});

const validationSchema = Yup.object({
        name: nameValidator(),
        bankname:banknameValidator(),
        accountnumber:accountnumberValidator(),
        ifsccode:ifsccodeValidator(),
        mobilenumber:mobilenumberValidator()
        
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
    const values = { name: "", bankname: "", accountnumber: "", ifsccode: "",mobilenumber:'' };
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
