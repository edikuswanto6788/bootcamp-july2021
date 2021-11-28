import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOGIN_SUCCESS, LOGIN_ERROR, AUTH_NOTFOUND, AUTH_FOUND } from '../Constans/LoginConstan'



export const loginHandler = async (dataLogin, dispatch) => {
    try {
        const { username, password } = dataLogin
        // const resp = await fetch("url", {})
        // const data = await resp.json() // {status: "success", data: {username: "admin", role: "admin"}}
        // if (data.status ==- "success")
        if (username === "admin" && password === "admin") {
            await AsyncStorage.setItem("loginDetails", JSON.stringify({
                loginStatus: true,
                username
            }))
            dispatch({ type: LOGIN_SUCCESS, payload: dataLogin })
        } else
            dispatch({ type: LOGIN_ERROR, payload: "Invalid Username or Password!" })
    } catch (err) {
        console.log("ERROR:", err);
        dispatch({ type: LOGIN_ERROR, payload: "Error occured!" })
    }
}

export const checkLoginStatus = async (dispatch) => {
    try {
        const loginDetails = await AsyncStorage.getItem("loginDetails")
        const data = JSON.parse(loginDetails)
        const loginStatus = data.loginStatus

        if (loginStatus) {
            dispatch({ type: AUTH_FOUND, payload: { username: data.username } })
        } else
            dispatch({ type: AUTH_NOTFOUND })
    } catch (err) {
        console.log("ERROR:", err);
        dispatch({ type: AUTH_NOTFOUND })
    }
}