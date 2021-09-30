import React, {
  Component
} from 'react'
 import { Header, NavbarComponent, Content } from "./template"

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {

    return ( 
      <>
        {/* <Header /> */}
        <NavbarComponent />
        <Content />
      </>
    );
  }
}

export default App