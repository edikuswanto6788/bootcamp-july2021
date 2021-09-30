
import React, { Component } from 'react'
// import Menu from '../component/menu'
import { Navbar, Nav, Container} from 'react-bootstrap'

class NavbarComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">React JS</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#listuser">List User</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                    {/* <Menu>Home</Menu>
                    <Menu>Contact</Menu>
                    <Menu>Log In</Menu> */}
                    </Nav>
                    </Container>
                </Navbar>
            
            </div>
            // <div style={{
            //     marginTop: 10,
            //     display: 'flex',
            //     justifyContent: "flex-start",
            //     gap: 10,
            //     alignItems: "center"
            // }}>
            //     <Menu>Home</Menu>
            //     <Menu>Contact</Menu>
            //     <Menu>Log In</Menu>
            // </div>
        );
    }
}

export default NavbarComponent;