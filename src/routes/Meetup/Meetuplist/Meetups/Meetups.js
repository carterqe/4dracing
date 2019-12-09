import React, { Component } from "react";
import "./Meetups.css";
// import axios from "axios";

class Meetups extends Component {
  constructor() {
    super();
    this.state = {
      editToggle: false,
      title: null,
      description: null,
      image: null,
      meetup_id: null
    };
  }


  componentDidMount() {
    const { title, description, image, meetup_id } = this.props.meetup
    this.setState({ title, description, image, meetup_id })
  }
  

  handleInputChange = ({ name, value }) => {
    this.setState({ [name]: value });
  };


  toggleEdit = () => {
    this.setState({ editToggle: !this.state.editToggle });
  };


  updateMeetup = () => {
    this.props.updateMeetup(this.state)
    this.toggleEdit()
  };

  render() {
    const { title, description, image, meetup_id } = this.props.meetup
    return (
      <div className="meetups">
        {this.state.editToggle ? (
          <div className="edit-container">
            <input
              type="text"
              placeholder="title"
              value={this.state.title}
              name="title"
              onChange={e => this.handleInputChange(e.target)}
            />
            <input
              type="text"
              placeholder="description"
              value={this.state.description}
              name="description"
              onChange={e => this.handleInputChange(e.target)}
            />
            <input
              type="text"
              placeholder="image url"
              value={this.state.image}
              name="image"
              onChange={e => this.handleInputChange(e.target)}
            />
            <button onClick={() => { this.updateMeetup() }}>Confirm</button>
          </div>
        ) : (
          <div className="meetup-container">
            <h4> title: {title} </h4>
            <h4>description: {description}</h4>
            <h4>image: {image}</h4>
            <button onClick={() => this.toggleEdit()}>Edit</button>
            <button onClick={() => this.props.deleteHandler(meetup_id)}>
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Meetups;
