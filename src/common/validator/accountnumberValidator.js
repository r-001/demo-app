import * as Yup from "yup";

const NameTest=/^\d{9,18}$/; 
const accountnumberValidator=()=>{
    return Yup.string().matches(NameTest,"Enter Digit Between 9 to 18")
    .required("Please Enter Account Number")
}
export default accountnumberValidator;