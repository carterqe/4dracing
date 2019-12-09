module.exports = {
  submitMeetup: async (req, res) => {
  const { title, description, imageUrl } = req.body;
  const db = req.app.get('db');
  db.add_meetup([
    title,
    description,
    imageUrl,
    +req.session.user.id
  ])
  .then(result => {
    res.status(200).send(result[0])
  }).catch(err => {
    console.log(err)
  })  
},

  getMeetup: (req, res) => {
    const db = req.app.get('db');
    db.get_meetup()
    .then(result => {
      res.status(200).send(result)
    })
  },

  updateMeetup: (req, res) => {
    console.log(req.body)
    const db = req.app.get('db');
    const {title, description, image} = req.body
    const {id} = req.params
    db.update_meetup([
      title,
      description,
      image,
      id
    ])
    .then(result => {
      res.status(200).send(result)
    })
  },

  deleteMeetup: (req, res) => {
    const db = req.app.get('db')
    db.delete_meetup(req.params.id)
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(err)
    })
  }
}