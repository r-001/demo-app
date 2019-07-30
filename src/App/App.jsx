import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from '../common/components/Header';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import UserProfile from '../UserProfile';
import Addbeneficiary from '../AddBeneficiary';
import UserAccount from '../UserAccount';
import BeneficiaryDetails from '../BeneficiaryDetails';
import ContactUs from '../ContactUs';
import Home from '../Home';

const App = () => (
  <div>
    <Router>
      <Header />
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/login/" component={SignIn} />
        <Route path="/signup/" component={SignUp} />
        <Route path="/userprofile/" component={UserProfile} />
        <Route path="/userprofile/useraccount" component={UserAccount} />
        <Route path="/userprofile/Addbeneficiary" component={Addbeneficiary} />
        <Route path="/userprofile/Viewbeneficiary" component={BeneficiaryDetails} />
        <Route path="/userprofile/contactus" component={ContactUs} />
      </div>
    </Router>
  </div>
);

export default App;
