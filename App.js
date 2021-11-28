import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Provider } from 'react-redux';
import Router from './Router';
import Store from './Redux/Store';
import { SQLite, SQLiteContext } from './Database';


// const defaultLoginState = {
//   loginStatus: false,
//   username: ""
// }
// const reducer = (state = defaultLoginState, action) => {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       return {
//         loginStatus: true,
//         username: action.payload.username
//       }

//     default:
//       return state
//   }
// }



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <SQLiteContext.Provider value={ new SQLite() }>
          <Router />
         </SQLiteContext.Provider>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;