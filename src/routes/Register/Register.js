import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import './Register.css'
import axios from 'axios'
// import Alert from 'react-bootstrap/Alert'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.css';
import { Alert } from 'reactstrap'

class Register extends Component {
  constructor () {
    super () 
    this.state = {
    username: '',
    password: '',
    isAdmin: false,
    showError: false,
    showSuccess: false
    }
  }

  updateUser(user) {
    this.setState({
      user,
    });
  }

  handleUsernameInput = (value) => {
    this.setState({ username: value, showNotification: false });
  }

  handlePasswordInput = (value) => {
    this.setState({ password: value });
  }

  toggleAdmin = () => {
    const { isAdmin } = this.state;
    this.setState({ isAdmin: !isAdmin });
  }

  login = () => {
    console.log(this.state)
    const { username, password } = this.state
      axios
        .post('/auth/login', { username, password })
        .then(user => {
          console.log(this.props)
          this.updateUser(user.data)
          this.setState({ username: '', password: ''})
          this.props.history.push('/')
        })
      .catch(err => alert (err.response.request.response))
  }

  register = () => {
    const { username, password, isAdmin } = this.state;
    axios
      .post('/auth/register', { username, password, isAdmin })
      .then(user => {
        this.setState({ username: '', password: '', showSuccess: true });
        this.updateUser(user.data);
      })
      .catch(err => {
        console.log(err)
        this.setState({ username: '', password: '', showError: true });
        // alert(err.response.request.response);
      });
  }

  render() {
    const { username, password } = this.state;
    // const { user } = this.props;
    return(
      <div className="register">
        <Header />
        <div className="loginContainer">
        <Alert color="danger" className="error-alert" isOpen={this.state.showError}>
          Username is already taken.
        </Alert>
        <Alert color="danger" className="success-alert" isOpen={this.state.showSuccess}>
          Successful register, log in.
        </Alert>
        <div className="login-inputs">
          <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => this.handleUsernameInput(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => this.handlePasswordInput(e.target.value)}
          />
          </div>
          <div className="login-buttons"> 
            <button onClick={this.login} className="login-button">Log In</button>
            <button onClick={this.register} className="login-button">
            Register
          </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Register