import React, { Component } from 'react'
import Meetups from './Meetups/Meetups'
import { connect } from 'react-redux'
import { initializeMeetupStore, deleteMeetup, updateMeetup } from '../../../redux/reducers/meetup.reducer'

class Meetuplist extends Component {

  componentDidMount() {
    this.props.onInitMeetup();
  }

  
  render() {
    const { meetups } = this.props
    return(
      <div className="meetup-container">
        {
          meetups.map((meetup, idx) => 
            <Meetups 
              key={idx} 
              meetup={meetup}
              deleteHandler={(id) => this.props.deleteMeetup(id)}
              updateMeetup={(meetup) => this.props.updateMeetup(meetup)}
              />)
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    meetups: state.meetups,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInitMeetup: () => dispatch(initializeMeetupStore()),
  deleteMeetup: (id) => dispatch(deleteMeetup(id)),
  updateMeetup: (meetup) => dispatch(updateMeetup(meetup))
});

export default connect(mapStateToProps, mapDispatchToProps)(Meetuplist)