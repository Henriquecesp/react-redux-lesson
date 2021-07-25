import { CHANGE_USER, LOGOUT } from './userTypes'

const initialState = {
  user: '',
  isLogged: false
}

// Reducer
export default function userReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        user: action.payload,
        isLogged: true
      }
    case LOGOUT:
      return {
        ...state,
        user: '',
        isLogged: false
      }
    default:
      return state
  }
}
