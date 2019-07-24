import React from "react";
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenAlt} from '@fortawesome/free-solid-svg-icons'

class CreateBenificiary extends React.Component {

      constructor(props){
        super(props);
        this.state={
          msg:false
        }
      }

  
  render() {
      const nameTest=/^[a-zA-Z ]{2,30}$/i;
      const banknameTest=/^[a-zA-Z ]{2,30}$/i;
      const contactnumberTest=/^[0-9]{10}$/i;
      const accountnumberTest=/^[0-9]{20}$/i;
    /* IFSC Code Format:

1] Exact length should be 11


2] First 4 alphabets

3] Fifth character is 0 (zero)

4] Last six characters (usually numeric, but can be alphabetic) */
  const  ifscTest=/^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/i;
    return (
      <div className="container-fluid">
        <div className="header">

            Beneficiary Registration &nbsp; <FontAwesomeIcon icon={faPenAlt} />
          </div>

        <div className="row">
          <div className="col-md-4 col-sm-12 create-customer">
            <Formik
              initialValues={{ name:'',bankname:'',mobileno:'',accountno:'',ifsc:'',customer_mobileno:''}}
              validate={values => {
                let errors = {};
                
                if (values.name === "") {
                    errors.name = "name is required";
                  } else if (!nameTest.test(values.name)) {
                    errors.name = "Invalid benifisary format";
                  }

                  if (values.bankname === "") {
                    errors.bankname = "bankname is required";
                  } else if (!banknameTest.test(values.bankname)) {
                    errors.bankname = "Invalid bankname format";    
                }
                if (values.mobileno === "") {
                    errors.mobileno = "mobile no is required";
                  } else if (!contactnumberTest.test(values.mobileno)) {
                    errors.mobileno = "Invalid Contactnumber format";
                  }
                  if (values.customer_mobileno === "") {
                    errors.customer_mobileno = "customer mobile no is required";
                  } else if (!contactnumberTest.test(values.customer_mobileno)) {
                    errors.customer_mobileno = "Invalid Contact number format";
                  }
                  if (values.accountno === "") {
                    errors.accountno = "accountno is required";
                  } else if (!accountnumberTest.test(values.accountno)) {
                    errors.accountno = "Invalid account no format";
                  }
                  if (values.ifsc === "") {
                    errors.ifsc = "ifsc is required";
                  } else if (!ifscTest.test(values.ifsc)) {
                    errors.ifsc = "Invalid IFSC format";    
                }

                 
                return errors;
              }}
            
              onSubmit={(values,{ setSubmitting,resetForm }) => {
                console.log(values);
                 axios.post("http://10.51.200.85:9000/remittance/v1/BeneficiaryService/", values )
      .then(res => {
        console.log(res);
        console.log(res.data);
        values=null;
        alert("Successfully Submitted");
        window.location.reload();
      })
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                
                <Form autocomplete="off">
                    
                    <div className="form-group">
                      <Field
                        type="text"
                        name="name"
                       autocomplete="off"
                        placeholder="Enter Beneficiary name"
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
                        type="text"
                        name="bankname"
                       autocomplete="off"
                        placeholder="Enter Bank name"
                        className={`form-control ${
                          touched.bankname && errors.bankname ? "is-invalid" : ""
                        }`}
                      />
                      <ErrorMessage
                        component="div"
                        name="bankname"
                        className="invalid-feedback"
                      />
                    </div>
                  

                  
                  <div className="form-group">
                    
                    <Field
                      type="text"
                      name="mobileno"
                      autocomplete="off"
                      placeholder="Enter contact number"
                      className={`form-control ${
                        touched.mobileno && errors.mobileno ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="mobileno"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    
                    <Field
                      type="text"
                      name="accountno"
                     autocomplete="off"
                      placeholder="Enter account number"
                      className={`form-control ${
                        touched.accountno && errors.accountno ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="accountno"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    
                    <Field
                      type="text"
                      name="ifsc"
                     autocomplete="off"
                      placeholder="Enter IFSC code"
                      className={`form-control ${
                        touched.ifsc && errors.ifsc ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="ifsc"
                      className="invalid-feedback"
                    />
                  </div>
                  
                    
                  <div className="form-group">
                    
                    <Field
                   autocomplete="off"
                      type="text"
                      name="customer_mobileno"
                      placeholder="Enter customer mobile number"
                      className={`form-control ${
                        touched.customer_mobileno && errors.customer_mobileno ? "is-invalid" : ""
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="customer_mobileno"
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

export default CreateBenificiary;
