import { faHome, faUserPlus,faUser,faEye, faIdCard,} from '@fortawesome/free-solid-svg-icons'

const sidemenucontent=()=>{
    return [
        {
          to: '/',
          icon: faHome,
          textname: 'Home',
          style:{paddingLeft: 13,color:"#0000FF",fontWeight : "550", textDecoration: 'none'}
        
        }, {
          to: '/userprofile/useraccount',
          icon: faUser,
          textname: 'User Account',
          style:{paddingLeft: 13,color:"#0000FF",fontWeight : "550", textDecoration: 'none'}
          
        },
        {
          to: '/userprofile/Addbeneficiary',
          icon: faUserPlus,
          textname: 'Add Beneficiary',
          style:{paddingLeft: 13,color:"#0000FF",fontWeight : "550", textDecoration: 'none'}
          
        },
        
        {
          to: '/userprofile/Viewbeneficiary',
          icon: faEye,
          textname: 'View Beneficiary',
          style:{paddingLeft: 13,color:"#0000FF",fontWeight : "550", textDecoration: 'none'}
          
        },
        {
          to: '/userprofile/contactus',
          icon: faIdCard,
          textname: 'Contact Us',
          style:{paddingLeft: 13,color:"#0000FF",fontWeight : "550", textDecoration: 'none'}
          
        }
      ]

}

export default  sidemenucontent;