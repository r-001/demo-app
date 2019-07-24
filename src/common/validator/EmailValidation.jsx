import EmailRegex from '../regex/EmailRegex'
//const EmailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; 
const EmailValidation=(props)=>{
    if (props.email === "") {
       return  "Email is required";
      } else if (!EmailRegex().test(props.email)) {
       return  "Invalid email address format";
      }
   
}
export default  EmailValidation;