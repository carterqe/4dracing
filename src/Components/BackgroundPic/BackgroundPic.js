import React, { Component } from 'react'
import ChallengerBackground from './challenger-background.jpg'
import './BackgroundPic.css'

class BackgroundPic extends Component {
  render() {
    return(
      <div>
        <section className="first-background;">
          <img src={ChallengerBackground} className="challenger-pic" alt="car background"/>
        </section>
      </div>
    )
  }
}

export default BackgroundPic