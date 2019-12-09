import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Meetup from './Meetup/Meetup'
import Members from './Members/Members'
import Pictures from './Pictures/Pictures'
import Profile from './Profile/Profile'
import Register from './Register/Register'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/meetups" component={Meetup} />
    <Route path="/members" component={Members} />
    <Route path="/pictures" component={Pictures} />
    <Route path="/profile" component={Profile} />
    <Route path="/register" component={Register} />
  </Switch>
)
