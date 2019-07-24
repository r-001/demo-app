import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import Header from '../components/Header';
import Signin from '../components/Signin';
import Signup from '../components/Signup';
import Userprofile from '../components/Userprofile';
import Addbeneficiary from '../components/Addbeneficiary';
import Useraccount from '../components/Useraccount';
import Viewbeneficiary from '../components/Viewbeneficiary';
import Contactus from '../components/Contactus';
import Home from '../components/Home';

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
        <Route path="/userprofile/Viewbeneficiary" component={Viewbeneficiary} />
        <Route path="/userprofile/contactus" component={Contactus} />
      </div>
    </Router>
  </div>
);

export default App;
