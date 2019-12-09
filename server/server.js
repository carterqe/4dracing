require('dotenv').config()
const express = require('express')
// const axios = require('axios')
const app = express()
const authCtrl = require('./controllers/authController')
const meetupCtrl = require('./controllers/meetupController')
// const controller = require('./controllers/')
app.use(express.json())
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const massive = require('massive')
const session = require('express-session')


massive(CONNECTION_STRING).then(databaseConnection => {
  app.set('db', databaseConnection)
  console.log("Packin a solid ")
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} horse power.`))
})

app.use(
  session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
  })
)

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)

app.post('/meetupCtrl/submit', meetupCtrl.submitMeetup)
app.get('/api/meetups', meetupCtrl.getMeetup)
app.put('/api/meetups/:id', meetupCtrl.updateMeetup)
app.delete('/api/meetups/:id', meetupCtrl.deleteMeetup)