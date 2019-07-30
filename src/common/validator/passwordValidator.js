import * as Yup from "yup";

const PasswordValidator=()=>{
    return Yup.string("")
    .min(8, "Password must contain atleast 8 characters")
    .required("Enter your password")
}
export default PasswordValidator;