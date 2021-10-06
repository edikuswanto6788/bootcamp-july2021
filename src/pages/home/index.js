import React, { Component } from 'react';
import { Container } from 'react-bootstrap';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: "",
            // password: "",
        }
    }
        // login = (e) => {
      
        //     this.setState({
        //         [e.target.name]: e.target.value
        //     })
        // }
    
    render() {
        return (
            <Container>
                <h1>Welcome to My App Parkir</h1>
                </Container>
        );
    }
                
}

export default Home;