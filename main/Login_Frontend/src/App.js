import { BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./Profile";
import React, { useState, useEffect } from "react";
import { getUser, getToken, setSession, resetSession } from "./service/AuthentService";
import axios from "axios";
/////////////////////////////////////
const APIURL = 'https://qumju8n29l.execute-api.us-east-2.amazonaws.com/prod/verify';
/////////////////////////////////////
function App() {
  const [isAuthen, setAuthen] = useState(true);
  useEffect(() => {
    const token = getToken();
    if (token === 'undefined' || token === undefined || token === null || !token) {
      return;
    }
    const requestConfig = {
      headers: {
        'x-api-key': 'neKKXeqoAs7i724un3NIOaZIm08rP8v37uT8lb4b'
      }
    }
    const requestBody = {
      user: getUser(),
      token: token
    }
    axios.post(APIURL, requestBody, requestConfig).then(response => {
      setSession(response.data.user, response.data.token);
      setAuthen(false);
    }).catch(() => {
      resetSession();
      setAuthen(false);
    })
  }, []);
/////////////////////////////////////
  const token = getToken();
  if (isAuthen && token) {
    return <div className="content">Loading Page</div>
  }
  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/register">Register</NavLink>
        <NavLink activeClassName="active" to="/login">Login</NavLink>
        <NavLink activeClassName="active" to="/profile">Your Profile</NavLink>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home}/>
          <PublicRoute path="/register" component={Register}/>
          <PublicRoute path="/login" component={Login}/>
          <PrivateRoute path="/profile" component={Profile}/>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;