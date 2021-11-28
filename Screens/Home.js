import React, { Component, useState } from 'react';
import { View } from 'react-native';
import { List } from '.';



const Home = ({ username }) => {

    return (
        <View style={{ flex: 1 }}>
            <List />
        </View>
    )
}

export default Home;