
import passwordRegex from '../regex/PasswordRegex'

const PasswordValidation=(props)=>{
    
        if (props.password === "") {
            return "Password is required";
          } else if ( !passwordRegex().test(props.password)) {
              if(props.password.length<6)
              {
                return 'password length should be more than 6';
              }
              else{
                return 'please use special charactes and digits ';
              }
             
             } 
             
    
    
}
export default PasswordValidation;