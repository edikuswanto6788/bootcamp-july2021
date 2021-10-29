import React, { Component } from 'react'
import { Login, Home } from './Screens';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    }
  }
  setLogin = status => this.setState({ isLoggedIn: status })
  render() {
    if (this.state.isLoggedIn)
      return <Home username="admin" />

    return <Login setLogin={this.setLogin} />
  }
}


export default App;