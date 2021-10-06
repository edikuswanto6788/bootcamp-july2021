import React, { Component } from 'react';
import { Container } from 'react-bootstrap';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.idInterval = 0
    }

    componentDidMount() {
        this.idInterval = setInterval(() => {
            console.log("ini interval");
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.idInterval)
    }
   
    renderList = () => {
        const list =  this.props.users.map((user, idx) => {
          console.log("user:", user);
            return <tr key = {idx}>
                <td>{idx + 1}</td>
                <td>{user.username}</td>
                <td>{user.address}</td>
                <td>
                <button onClick={() => this.props.setUser(idx)}>Update</button>
                
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        })
        return list
       
    }

    render() {
        return (
            <>
                <Container>
                    <div>
                        <h1>Detail Contact</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Username</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderList()}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </>
        );
    }
}

export default Contact;