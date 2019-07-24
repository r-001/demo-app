import React from "react";
//import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt} from '@fortawesome/free-solid-svg-icons'

class Signup extends React.Component {

  render() {
      const nameTest=/^[a-zA-Z ]{2,30}$/i;
  
    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const contactnumberTest=/^[0-9]{10}$/i;
    const passwordTest=/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i;
    return (
      <div className="container-fluid">
          <div className="header">
             Registration &nbsp; <FontAwesomeIcon icon={faPenAlt} />
          </div>
        <div className="row">
          <div className="create-customer">
            <Formik
              initialValues={{name:'',email:'',contactnumber:'',password:''}}
              validate={values => {
                let errors = {};
                
                if (values.name === "") {
                    errors.name = "Name is required";
                  } else if (!nameTest.test(values.name)) {
                    errors.name = "Invalid Name format";
                  }

                 
                
                if (values.email === "") {
                  errors.email = "Email is required";
                } else if (!emailTest.test(values.email)) {
                  errors.email = "Invalid email address format";
                }


                if (values.password === "") {
                  errors.password = "Password is required";
                } else if ( !passwordTest.test(values.password)) {
                    if(values.password.length<6)
                    {
                      errors.password= 'password length should be more than 6';
                    }
                    else{
                      errors.password='please use special charactes and digits ';
                    }
                   
                }
              
                if (values.contactnumber === "") {
                    errors.contactnumber = "Contact number is required";
                  } else if (!contactnumberTest.test(values.contactnumber)) {
                    errors.contactnumber = "Invalid Contact number format";
                  }

                 

                return errors;
              }}
            
              onSubmit={(values,{ setSubmitting }) => {
                
                console.log(values.addressline);
                console.log(values);
                 const userdata={
                       name:'',
                       emai:'',
                       password:'',
                       mobileno:'',
                       
                 };
                 userdata.firstname=values.name;
                 userdata.email=values.email;
                 userdata.password=values.password;
                 userdata.mobileno=values.contactnumber;
                
                
      console.log(userdata);      
                
     /* axios.post("http://10.51.200.85:9000/remittance/v1/CustomerService/",userdata)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("Successfully Submitted");
        window.location.reload();
      }) */
             setSubmitting(false);
              }}
              
            >
              {({ touched, errors, isSubmitting }) => (
                <Form autocomplete="off">
                    <div className="form-group">
                      
                      
                      <Field
                      autocomplete="off"
                        type="name"
                        name="name"
                        placeholder="Enter Name"
                        className={`form-control ${
                          touched.name && errors.name ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="name"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      
                      
                      <Field
                      autocomplete="off"
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className={`form-control ${
                          touched.email && errors.email ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="email"
                        className="invalid-feedback"
                      />
                    </div>
                    
            
                  
                  
                  <div className="form-group">
                   
                    <Field
                    autocomplete="off"
                      type="contactnumber"
                      name="contactnumber"
                      placeholder="Enter contact number"
                      className={`form-control ${
                        touched.contactnumber && errors.contactnumber ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="contactnumber"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    
                    <Field
                    autocomplete="off"
                      type="password"
                      name="password"
                      placeholder="Enter contact Number"
                      className={`form-control ${
                        touched.password && errors.password ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Please wait..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
