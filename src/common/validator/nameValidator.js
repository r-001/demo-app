import * as Yup from "yup";

const NameTest=/^[a-zA-Z ]{2,30}$/;
const nameValidator=()=>{
    return Yup.string().matches(NameTest,"Number and special charecter are not allowed")
    .required("Please Enter the  Name")
}
export default nameValidator;