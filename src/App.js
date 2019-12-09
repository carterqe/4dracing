import React, { Component } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import routes from './routes/routes'

class App extends Component {


  updateUser(user) {
    this.setState({
      user,
    });
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          {routes}
        </div>
      </HashRouter>
    ) 
  }
}

export default App;
