import axios from 'axios';
import React, { Component } from 'react'

class Home extends Component {
    state={}

    componentDidMount() {
        const config = {
            header: {
                Authorization:'Bearer' + localStorage.getItem('token')
            }
        }
        axios.get('users', config).then(
            res => {
                console.log(res);
                this.setState({
                    users:res.data
                })
            },
            err => {
                console.log(err);
            }
        )
    }
    render() {
        if (this.state.users) {
               
        }
        return (
           
                <div>
                    <h1>Hi</h1>
                </div>
            )
        }
    }

export default Home;