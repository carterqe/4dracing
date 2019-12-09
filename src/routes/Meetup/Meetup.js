import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import './Meetup.css'
import Meetuplist from './Meetuplist/Meetuplist'
import { connect } from 'react-redux'
import { createMeetup } from '../../redux/reducers/meetup.reducer'

class Meetup extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      imageUrl: '',
    }
  }


  handleInputChange = ({ name, value }) => {
    this.setState({ [name]: value });
  }


  resetState = () => {
    this.setState({
      title: '',
      description: '',
      imageUrl: ''
    })
  }


  submitHandler = () => { 
    const { title, description, imageUrl } = this.state
    this.props.onCreateMeetup({title, description, imageUrl})
    this.resetState()
  }
  

  render() {
    const { title, description, imageUrl } = this.state
    return(
      <div className="meetups">
        <Header />
        <Meetuplist />
        <form className="meetups-form">
          <input 
            placeholder="title"
            value={title}
            name="title"
            onChange={e => this.handleInputChange(e.target)}/>
          <input 
            placeholder="description" 
            value={description}
            name="description"
            onChange={e => this.handleInputChange(e.target)}/>
          <input 
            placeholder="image url" 
            value={imageUrl}
            name="imageUrl"
            onChange={e => this.handleInputChange(e.target)} />
          <button type="button" onClick={() => this.submitHandler()}>Submit</button>
          <button>Edit</button>
          <button>Cancel</button>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  onCreateMeetup: ({ title, description, imageUrl }) => dispatch(createMeetup({ title, description, imageUrl }))
});


export default connect(null, mapDispatchToProps)(Meetup)