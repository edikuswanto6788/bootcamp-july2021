import React, { Component } from 'react';

import { Home, Login, Bayar } from "../pages"

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedUser: -1
        }
    }

    render() {
       // const dataEdit = this.state.selectedUser >= 0 ? this.state.data[this.state.selectedUser] : {}
        if (this.props.menu === "login")
            return <Login />
            if (this.props.menu === "bayar")
            return <Bayar />

        return <Home />
    }

}

export default Content;