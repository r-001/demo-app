import * as Yup from "yup";

const EmailTest=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; 
const EmailValidator=()=>{
    return Yup.string().matches(EmailTest,"Please Enter valid Email (ex:xyz123@gmail.com)")
    .required("Email is required")
}
export default EmailValidator;