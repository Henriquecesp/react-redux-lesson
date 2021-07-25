import { CHANGE_USER, LOGOUT } from './userTypes'

export function changeUser(user) {
  return {
    type: CHANGE_USER,
    info: "Change the current user",
    payload: user
  }
}

export function logout() {
  return {
    type: LOGOUT,
    info: "Logout the current user",
  }
}