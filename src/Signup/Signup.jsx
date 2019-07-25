import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./Form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
/* import Footer from '../common/components/Footer' */

const styles = theme => ({
   
});
const NameTest=/^[a-zA-Z ]{2,30}$/;
const EmailTest=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 
 
const validationSchema = Yup.object({
 /*  name: Yup.string("Enter a name").required("Name is required") */
 
 name: Yup.string().matches(NameTest,"Number and special charecter are not allowed")
 .required("Please Enter the  Name"),
  email: Yup.string().matches(EmailTest,"Please Enter valid Email (ex:xyz123@gmail.com)")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submit = (data,{ setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(data, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  render() {
    const values = { name: "", email: "", confirmPassword: "", password: "" };
    return (
      <React.Fragment>
        <div >
          <Paper  elevation={0} >
            
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={this.submit}
            />
          </Paper>
        </div>
        {/* <Footer/> */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(InputForm);
