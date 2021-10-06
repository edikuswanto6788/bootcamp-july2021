import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import "./menu.css"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div
                className="menu"
                style={{ backgroundColor: this.props.color }}
                onClick={this.props.fn}
            > <Container>
                {this.props.children}
            </Container>
            </div>
        );
    }
}

export default Menu;