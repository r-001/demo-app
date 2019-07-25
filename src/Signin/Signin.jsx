import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./Form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";

const styles = theme => ({
   
});
const EmailTest=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 

const validationSchema = Yup.object({
  
  email: Yup.string().matches(EmailTest,"Please Enter valid Email (ex:xyz123@gmail.com)")
    .required("Email is required"),
  password: Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password"),
  
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
