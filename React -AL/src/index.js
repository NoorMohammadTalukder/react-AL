import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Head from './Components/Head';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login';
import Registration from './Components/Registration';
import ServiceProviderDetails from './Components/ServiceProviderDetails';
import Logout from './Components/Logout';
import axios from 'axios';

var token = null;
if (localStorage.getItem('user')) {
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL = "http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;




ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Head />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/serviceproviderdetails">
          <ServiceProviderDetails />
        </Route>
        <Route exact path="/Registration">
          <Registration />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>


      </Switch>


      {/* <Foot /> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();