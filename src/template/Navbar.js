import React, { Component} from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../components/menu';


class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Container>
                    <div className="menu">
                        <Menu  fn={() => this.props.goToPage("home")}>Home</Menu>
                        <Menu  fn={() => this.props.goToPage("contact")}>Contact</Menu>
                        <Menu  fn={() => this.props.goToPage("listuser")}>List User</Menu>
                        <Menu  fn={() => this.props.goToPage("login")}>Log In</Menu>
                    </div>
                    </Container>
        );
    }
}

export default NavbarComponent;