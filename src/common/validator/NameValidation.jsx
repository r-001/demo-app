
import NameRegx from '../regex/NameRegx'
 const NameValidation=(props)=>{
  if (props.name === "") {
    return "Name is required";
  } else if (!NameRegx().test(props.name)) {
    return "Invalid Name format";
  }

       
 }
 export  default NameValidation;