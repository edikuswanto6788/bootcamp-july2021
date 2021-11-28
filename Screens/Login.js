import React, { Component } from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Keyboard,
    ImageBackground,
    Alert,
    
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import IconPerson from 'react-native-vector-icons/FontAwesome'
import IconLock from 'react-native-vector-icons/FontAwesome'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isKeyboardShown: false,
            username: "",
            password: "",
        }
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);

    }

    keyboardDidShow = () => this.setState({ isKeyboardShown: true })
    keyboardDidHide = () => this.setState({ isKeyboardShown: false })

    buttonLoginPressed = () => {
        const { username, password } = this.state
        if (username === "admin" && password === "admin") {
            Alert.alert("Information", "Login Success!!")
            return this.props.setLogin(true)
        }

        return Alert.alert("Warning", "Invalid username/password!!")
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    componentDidMount() { }

    render() {
        // console.log(this.state);
        return (
        
            <ImageBackground
                style={styles.img}
                source={require('/Assets/Images/homescreen.jpg') } >
                <View
                    style={{
                        ...styles.container,
                        marginBottom: this.state.isKeyboardShown ? "20%" : "50%"
                    }} >
                    <Text style={styles.title}>SIGN IN</Text>
                    <Input
                        placeholder="Type your username"
                        inputStyle={styles.input}
                        leftIcon={
                            <IconPerson
                                name='user'
                                size={24}
                                color='darkgrey' />}
                        
                        onChangeText={username => this.setState({ username })}
                    />
                    <Input
                        placeholder="Type your password"
                        style={styles.input}
                        secureTextEntry={true}
                        leftIcon={
                            <IconLock
                                name='lock'
                                size={24}
                                color='darkgrey' />}
                        onChangeText={password => this.setState({ password })}
                    />
                    <View style={styles.textRegister}>
                        <Text>Don't have an account? </Text>
                        <Text style={styles.textRegisterHere}>Register Here</Text>
                    </View>
                    <Button
                        buttonStyle={styles.buttonLogin}
                        title="LOGIN"
                        onPress={this.buttonLoginPressed}
                    />
                </View>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    img: {
        width: "100%",
        height: "100%"
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
        fontWeight: "bold",
        color: "black"
    },
    input: {
        color: "black"
    },
    textRegister: {
        flexDirection: "row",
        fontSize: 18
    },
    textRegisterHere: {
        fontWeight: "bold",
    },
    buttonLogin: {
        marginTop: 50,
        paddingHorizontal: 70,
        backgroundColor: "black"
    }
})

export default Login;


/**
 * Tugas:
 *      - Buatlah page Login & Home (Semenarik Mungkin)
 *      - Terapkan verifikasi pada Login
 *
 * Latihan:
 *      - Buat form untuk edit data user (name, email, address.city)
 *      - Setiap user harus bisa login
 *      - Buat home message yang berbeda setiap user yang login
 *
 * Latihan:
 *      - Buatlah calendar tanpa menggunakan third party:
 *          - By default, tampilkan bulan saat ini
 *          - Maksimal jam 12 malam
 */