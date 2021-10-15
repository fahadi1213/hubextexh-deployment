import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import HomePage from './Components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './Components/TermsAndConditions/TermsAndConditions';
import ProjectsDetails from './Components/ProjectDetails/ProjectsDetails';
import Resume from './Components/Resume/Resume';


function App() {
  return (
    <>
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route  path="/services" ></Route>
            <Route  path="/contact" ></Route>
            <Route  path="/request" ></Route>
            <Route  path="/portfolio" ></Route>
            <Route  path="/careers" ></Route>
            <Route exact path="/privacypolicy" component={PrivacyPolicy}></Route>
            <Route exact path="/termsandconditions" component={TermsAndConditions}></Route>
            <Route exact path="/projects" component={ProjectsDetails}></Route>
            <Route exact path="/resume" component={Resume}></Route>
        </Switch>
    </>
  );
}

export default App;
