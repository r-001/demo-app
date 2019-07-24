import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from '../common/components/Header';
import Signin from '../Signin';
import Signup from '../Signup';
import Userprofile from '../Userprofile';
import Addbeneficiary from '../Addbeneficiary';
import Useraccount from '../Useraccount';
import BeneficiaryDetails from '../BeneficiaryDetails';
import Contactus from '../Contactus';
import Home from '../Home';

const App = () => (
  <div>
    <Router>
      <Header />
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/login/" component={Signin} />
        <Route path="/signup/" component={Signup} />
        <Route path="/userprofile/" component={Userprofile} />
        <Route path="/userprofile/useraccount" component={Useraccount} />
        <Route path="/userprofile/Addbeneficiary" component={Addbeneficiary} />
        <Route path="/userprofile/Viewbeneficiary" component={BeneficiaryDetails} />
        <Route path="/userprofile/contactus" component={Contactus} />
      </div>
    </Router>
  </div>
);

export default App;
