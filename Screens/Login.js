import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Input, Button, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Login extends Component {
  constructor(props) {
    super(props);
      this.state = {
        //isKeyboardShown: false,
        username: "",
        password: "",
      }
    //  
    }
    buttonLoginPressed = () => {
        const { username, password } = this.state
        if (username === "admin" && password === "admin") {
            Alert.alert("Information", "Login Success!!")
            return this.props.setLogin(true)
        }

        return Alert.alert("Warning", "Invalid username/password!!")
    }

    componentDidMount() { }
  render() {
    const input = React.createRef();
    return (
       <ImageBackground style={styles.img}
        source={require('../Assets/images/background.jpg')}>
            <View style={styles.container}>
                <Text style={styles.text1}>Welcome to My App</Text>
                <Input ref={input}
                    placeholder='Type your Username'
                    keyboardType='text'
                    onChangeText={username => this.setState({ username })}
                    leftIcon={
                        <Icon
                            name="envelope-o"
                            size={24}
                            color="block"
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
                            color="block"
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

export default Login;