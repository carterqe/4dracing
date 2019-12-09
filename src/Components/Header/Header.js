import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  constructor () {
    super()
    this.state ={
      open: false
    }
  }

  render() {
    const {open} = this.state
    return(
      <header>
        {/* <script src="https://kit.fontawesome.com/870d0d251f.js" crossOrigin="anonymous"></script> */}
        <div className="branding">
          <img src="https://www.dodge.com/assets/images/instructions/2017-dodge-demon-ringtone-instructions-logo-hero.png" className="header-logo" alt="header-logo"/>
          <h1 className="header-title">4D-Racing</h1>
        </div>
        <div className="sidebar-toggle">
          <div className={`sidebar ${open ? 'open' : ''}`}>
            <Link to="/"><button className="link-button">HOME</button></Link>
            <Link to="meetups"><button className="link-button">MEETUPS</button></Link>
            <Link to="members"><button className="link-button">MEMBERS</button></Link>
            <Link to="pictures"><button className="link-button">PICTURES</button></Link>
            <Link to="profile"><button className="link-button">PROFILE</button></Link>
            <Link to="register"><button className="link-button">REGISTER</button></Link>
            </div>
        </div>
        <img src="http://www.graciaviva.cat/png/big/21/215358_graffiti-transparent-background.png" className="header-tag" alt="graphiti-logo"/>
        <div className="controllers">
          <Link to ="profile" className="profile-pic-link"><img src="https://cdn4.iconfinder.com/data/icons/ios-edge-glyph-12/25/User-Circle-512.png" className="profile-pic" alt="profile"/></Link>
          <i className="fas fa-bars"  onClick={() => this.setState({open: !open})} />
        </div>
      </header>
    )
  }
}

export default Header