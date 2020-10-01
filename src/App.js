import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Homepage from "./components/homepage";
import './App.css';

//TODO: rewrite function to use actual authentication
//TODO: more documentation needed on the below function
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem("notekeeper/authentication/TOKEN")
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  return (
    <div className="App">
      {/* Navbar could go here */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/" component={Homepage} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
