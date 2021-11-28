import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { connect } from 'react-redux';
import { Login, Home, Calendar, User } from './Screens';
import { checkLoginStatus } from './Redux/Actions/LoginAction'



const Stack = createNativeStackNavigator()

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.checkLogin()
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <Stack.Navigator initialRouteName="User">
                     <Stack.Screen name="User" component={User} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Calendar" component={Calendar} />
                </Stack.Navigator>
            )
        }

        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Login" >
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.loginDetails.loginStatus
})

const mapDispatchToProps = dispatch => ({
    checkLogin: () => checkLoginStatus(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Router);