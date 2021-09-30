import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {   
        return (
            <div>
                <Container>
                    <h1 style={{"margin-top":"20px",
                    "margin-bottom":"30px"}}>List User</h1>                   
                    <Table striped bordered hover  variant="dark">
                        <thead style={{
                        "textAlign":"center"
                    }}>
                        <tr>
                        <th>No</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        </tr>
                    </thead>
                        <tbody style={{
                        "textAlign":"center"
                    }}>
                        <tr>
                        <td>1</td>
                        <td>Edikuswanto</td>
                        <td>edikuswanto6788@gmail.com</td>
                        <td>Jakarta</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Danang</td>
                        <td>danangsyahrini@gmail.com</td>
                        <td>Semarang</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Maruli</td>
                        <td>Mamaruliuli@gmail.com</td>
                        <td>Jakarta</td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>Rahmat</td>
                        <td>rahmathiyahiya@gmail.com</td>
                        <td>Solo</td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>Aldin</td>
                        <td>aldinwkwkwk@gmail.com</td>
                        <td>Surabaya</td>
                        </tr>
                    </tbody>
                    </Table>
               </Container>
            </div>
        );
    }
}

export default Content;
