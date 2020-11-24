import logo from './logo.svg';
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import { Route, Switch } from "react-router-dom";
// import "bootstrap-css-only/css/bootstrap.min.css";
import "./App.css";
import Home from './Components/HomePage'
import LandingPage from './Components/landingPage'
import Header from './Components/layouts/Header.jsx'
import Footer from './Components/layouts/Footer'
import GordonsSuperLeague from './Components/GordonsSuperLeague.jsx'
import DraftRulesPage from './Components/DraftRulePage.jsx'
function App() {
  return (
    <React.Fragment>
        
        <div>
        <Header/>
          <Switch>
           <Route path="/header" component={Header}/>
           <Route path="/DraftRulePage" component={DraftRulesPage}/>
           <Route path="/landingPage" component={LandingPage}/>
           <Route path="/home" component={Home}/>
           <Route path="/GordonsSuperLeague" component={GordonsSuperLeague}/>
          </Switch>
          <Footer/>
        </div>
        
        </React.Fragment>
  );
}

export default App;