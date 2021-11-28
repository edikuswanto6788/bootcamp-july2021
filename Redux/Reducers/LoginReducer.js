import { LOGIN_SUCCESS } from "../Constans/LoginConstan"

const defaultLoginState = {
  loginStatus: false,
  username: ""
}
export const LoginReducer = (state = defaultLoginState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loginStatus: true,
        username: action.payload.username
      }

    default:
      return state
  }
}