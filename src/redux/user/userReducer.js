import { CHANGE_USER, LOGOUT } from "./userTypes";

const initialStateUser = {
  user: "",
  isLogged: false
}

const userReducer = (state = initialStateUser, action) => {
  switch(action.type){
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
      return state;
  }
}

export default userReducer;