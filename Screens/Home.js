import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { List } from '.';



const Home = ({ username }) => {
    // const { username } = props

    // const [statusLogin, setStatusLogin] = useState(false)

    // console.log(statusLogin);
    // setStatusLogin(true);

    return (
        <View style={{ flex: 1 }}>
            <List />
        </View>
    )
}

export default Home;