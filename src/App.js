import React, {
  Component
} from 'react'
 import { Header, NavbarComponent, Content } from "./template"

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "home"
    }
  }

  changePage = page => {
    this.setState({
      menu: page
    })
    
  }
  render() {

    return (
      
      <>
        {/* <Header /> */}
        <NavbarComponent goToPage={this.changePage} />
        <Content menu={this.state.menu} goToPage={this.changePage} />
      </>
    );
  }
}

export default App