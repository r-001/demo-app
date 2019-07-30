import * as Yup from "yup";

const NameTest=/^[a-zA-Z ]{2,30}$/;
const banknameValidator=()=>{
    return Yup.string().matches(NameTest,"Number and special charecter are not allowed")
    .required("Please Enter the Bank Name")
}
export default banknameValidator;