import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { List } from '.';



const Home = (props) => {
    // const { username } = props

    // const [statusLogin, setStatusLogin] = useState(false)

    // console.log(statusLogin);
    // setStatusLogin(true);

    return (
        <View style={{ flex: 1 }}>
            <List navigation={props.navigation} />
        </View>
    )
}

export default Home;