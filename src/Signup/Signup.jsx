

import React from "react";
//import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt} from '@fortawesome/free-solid-svg-icons'
import EmailValidation from '../common/validator/EmailValidation'
import PasswordValidation from '../common/validator/PasswordValidation'
import NameValidation from '../common/validator/NameValidation'
import ContactNumberValidation from '../common/validator/ContactNumberValidation'

class Signup extends React.Component {

  render() {
      
    return (
      <div className="container-fluid">
          <div className="header">
             Registration &nbsp; <FontAwesomeIcon icon={faPenAlt} />
          </div>
        <div className="row">
          <div >
            <Formik
              initialValues={{name:'',email:'',contactnumber:'',password:''}}
              validate={values => {
                let errors = {};
                errors.email = EmailValidation(values)
                errors.password= PasswordValidation(values);
                errors.contactnumber = ContactNumberValidation(values)
                errors.name= NameValidation(values);


                return errors;
              }}
            
              onSubmit={(values,{ setSubmitting }) => {
                
                     
                
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
