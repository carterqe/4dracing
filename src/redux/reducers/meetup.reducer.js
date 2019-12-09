import axios from 'axios'

const INIT_MEETUP = 'INIT_MEETUP'
const CREATE_MEETUP = 'CREATE_MEETUP'
const READ_SINGLE_MEETUP = 'READ_SINGLE_MEETUP'
const UPDATE_MEETUP = 'UPDATE_MEETUP'
const DELETE_MEETUP = 'DELETE_MEETUP'
const READ_ALL_MEETUP = 'READ_ALL_MEETUP'

export const initializeMeetupStore = () => async (dispatch) => {
  const { data } = await axios.get('/api/meetups')
  dispatch({type: INIT_MEETUP, data})
}

export const createMeetup = (form) => async (dispatch) => {
  const { data } = await axios.post('/meetupCtrl/submit', form)
  dispatch({type: CREATE_MEETUP, data})
}

export const deleteMeetup = (id) => async (dispatch) => {
  await axios.delete(`/api/meetups/${id}`)
  dispatch({type: DELETE_MEETUP, id})
}

export const updateMeetup = ({ meetup_id, title, description, image }) => async (dispatch) => {
  const { data } = await axios.put(`/api/meetups/${meetup_id}`, { title, description, image })
  dispatch({type: UPDATE_MEETUP, data})
}

export default (state = [], action) => {
  switch (action.type) {
    case INIT_MEETUP:
      return action.data 
    case CREATE_MEETUP:
      return [...state, action.data]
    case READ_SINGLE_MEETUP:
      return action.data 
    case UPDATE_MEETUP:
      return state.map((meetup) => {
        if (meetup.meetup_id === action.data[0].meetup_id) {
          meetup = action.data[0]
        }
        return meetup
      })
    case  DELETE_MEETUP:
      return state.filter(({ meetup_id }) => meetup_id !== action.id)
    case READ_ALL_MEETUP:
      return action.data
    default:
      return state
  }
}