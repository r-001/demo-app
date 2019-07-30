import * as Yup from "yup";

const NameTest=/^([+]\d{2})?\d{10}$/;
const mobilenumberValidator=()=>{
    return Yup.string().matches(NameTest,"Number should be like (+918976542345)")
    .required("Please Enter the Mobile Number")
}
export default mobilenumberValidator;