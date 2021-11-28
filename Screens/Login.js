import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity,Alert } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { loginHandler } from '../Redux/Actions/LoginAction'

class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        //isKeyboardShown: false,
        username: "",
          password: "",
          isErrorShown: false
      }
    //  
    }
    buttonLoginPressed = () => {
        const { username, password } = this.state
        // if (username === "admin" && password === "admin") {
        //     Alert.alert("Information", "Login Success!!")
            return this.props.doLogin({username})
        // }

        // return Alert.alert("Warning", "Invalid username/password!!")
    }
    componentDidMount(prevProps,prevState) {
        console.log(prevProps);
        console.log(prevState);
    }
    render() {
        if (this.props.loginMessage !== "" && !this.state.isErrorShown)
        Alert.alert("Alert!", this.props.loginMessage)
    const input = React.createRef();
    return (
       <ImageBackground style={styles.img}
        source={require('../Assets/images/background.jpg')}>
            <View style={styles.container}>
                <Text style={styles.text1}>Welcome to My App</Text>
                <Input ref={input}
                    placeholder='Type your Username'
                    // keyboardType='text'
                    onChangeText={username => this.setState({ username })}
                    leftIcon={
                        <Icon
                            name="user"
                            size={24}
                            color="black"
                        />
                    }

                />
                <Input ref={input}
                    placeholder='Type your Password'
        
                    secureTextEntry={true}
                    onChangeText={password => this.setState({ password })}
                    leftIcon={
                        <Icon
                            name="key"
                            size={24}
                            color="black"
                        />
                    }
                />
                <View style={styles.btnlogin} >
                    
            <SocialIcon
                button
                light
                type='sign-in'
                title="LOGIN"
                backgroundColor='blue'
                onPress={this.buttonLoginPressed}
                    />
                    <Text style={styles.text2}>Don't Have an Account
                    </Text>
                <SocialIcon
                button
                light
                type='sign-in'
                title="SIGN UP"
                backgroundColor='blue'
                    />
                </View>
                
        </View>
        </ImageBackground>
            
        
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
        padding: 20
    
  },
  img: {
    flex: 1,
    width: null,
    height:null
    },
    
    text1: {
        
        fontSize: 30,
        marginBottom:25,
        alignItems:"center",
        color:"#ffffff"
    },
    text2: {
        fontSize: 15,
        color: "#ffffff",
        alignItems: "center",
        marginLeft:30
    },
    btnlogin: {
        
        borderRadius:80,
        width: 300,
       

    },
    btnregis: {
        marginTop: 10,
        width: 330,
        cursor:"pointer"
    }
})

const mapDispatchToProps = dispatch => ({
    doLogin: dataLogin => dispatch({ type: "LOGIN_SUCCESS", payload: dataLogin })
})

export default connect(null, mapDispatchToProps)(Login);