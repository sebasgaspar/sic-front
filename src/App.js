import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage as Home } from './pages/Home'
import { RegisterPage as Register } from './pages/Register';
import { LoginPage as Login } from './pages/Login';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
