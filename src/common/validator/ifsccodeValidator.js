import * as Yup from "yup";

const NameTest=/^[A-Z]{4}[0][A-Z0-9]{6}$/;
const ifsccodeValidator=()=>{
    return Yup.string().matches(NameTest,"IFSC Code should be like [{(first four charcter )(0)(alphanumeric character)}]")
    .required("Please Enter the IFSC Code")
}
export default ifsccodeValidator;