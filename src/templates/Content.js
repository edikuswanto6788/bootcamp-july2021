import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Home, Login, Profile, Signup } from '../components/pages'

export default class Content extends Component {
    render() {
        return (
            <Switch>
              <Route  exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signup" component={Profile} />
            </Switch>
           
        )
    }
}
