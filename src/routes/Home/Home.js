import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import BackgroundPic from '../../Components/BackgroundPic/BackgroundPic'

class Home extends Component {
  render() {
    return(
      <div>
        <Header/>
        <BackgroundPic/>
      </div>
    )
  }
}

export default Home