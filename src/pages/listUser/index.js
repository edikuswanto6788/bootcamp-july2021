import React, { Component } from 'react'
import {Container} from 'react-bootstrap'

 class ListUser extends Component {
    render() {
        return (
            <Container>
                <>
                    <h1>List User</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Action</th>
                                    
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>edi</td>
                                <td>edi@gmail.com</td>
                                <td>Jakarta</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>edi</td>
                                <td>edi@gmail.com</td>
                                <td>Jakarta</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>edi</td>
                                <td>edi@gmail.com</td>
                                <td>Jakarta</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>edi</td>
                                <td>edi@gmail.com</td>
                                <td>Jakarta</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </>
                </Container>
           
        );
    }
}
export default ListUser;