
import ContactNumberRegex from '../regex/ContactNumberRegex'
const ContactNumberValidation = (props) => {
  if (props.contactnumber === "") {
    return "Contact number is required";
  } else if (!ContactNumberRegex().test(props.contactnumber)) {
    return "Invalid Contact number format";
  }
}
export default ContactNumberValidation;