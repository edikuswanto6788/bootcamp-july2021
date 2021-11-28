import React, { Component } from 'react';
import { Alert, FlatList } from 'react-native';
import { Input, Button, ListItem } from 'react-native-elements';
import { SQLiteContext } from '../Database';



class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            users: []
        }
    }

    saveName = () => {
        this.props.sqlite.insertEmployee({
            id: Math.round(Math.random() * 100),
            name: this.state.name
        })
            .then(result => {
                Alert.alert("Success", "User registered!")
                this.setState({ name: "" })
            })
            .catch(error => Alert.alert("ERROR", error?.message))
    }

    renderItem = items => {
        const { item } = items
        return (
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    componentDidMount() {
        this.props.sqlite.getEmployees()
            .then(results => {
                const users = []
                const total = results[0].rows.length
                for (let index = 0; index < total; index++) {
                    const employee = results[0].rows.item(index)
                    users.push(employee)
                }
                this.setState({ users })
            })
            .catch(error => Alert.alert("ERROR", error?.message))
    }

    render() {
        return (
            <>
                <Input
                    placeholder="Type your name"
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />
                <Button
                    title="Save"
                    onPress={this.saveName}
                />
                <FlatList
                    keyExtractor={(data, idx) => idx.toString()}
                    data={this.state.users}
                    renderItem={this.renderItem}
                />
            </>
        );
    }
}

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <SQLiteContext.Consumer>
                {
                    sqlite => <Users {...this.props} sqlite={sqlite} />
                }
            </SQLiteContext.Consumer>
        );
    }
}

export default User;