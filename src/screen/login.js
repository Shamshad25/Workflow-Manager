import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ScrollView,
    TextInput,
    Image,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import CustomInput from '../Components/CustomInput';

// import { useDispatch } from 'react-redux'
// import { setSignIn } from '../Redux/slices/authSlice';
// import Tabs from '../Navigation/Tabs';

const Login = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigator = useNavigation();
    const [error, setError] = useState({ email: "", password: "" })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const dispatch = useDispatch();



    const onSubmit = () => {
        if (email.trim() == '') {
            setError({ ...error, email: 'Email address cannot be empty!' })
        } else if (password == '') {
            setError({ ...error, password: 'Please enter password!' })
        } else {

            setError({ email: "", password: '' });
            // dispatch(setSignIn());
            navigator.push("Tabs");

        }
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled" >
            <StatusBar
                backgroundColor="#06489c"


            />
            <View style={styles.container}>
                <Image source={require('../assets/images/alder_logo.png')} style={styles.logo} />
                <Text style={styles.header}>Login to Adler Account.</Text>
                <Text style={styles.label}>Email </Text>
                <CustomInput
                    placeholder='random@gmail.com'
                    name={'Email'}
                    value={email}
                    onChangeHandler={(text) => setEmail(text)}
                    errorText={error.email}
                />
                <Text style={styles.label}>Password</Text>
                <CustomInput
                    placeholder='password'
                    name={'password'}
                    value={password}
                    onChangeHandler={(text) => setPassword(text)}
                    errorText={error.password}
                    secure={true}

                />
                <TouchableOpacity
                    style={styles.btn}
                    onPress={onSubmit}
                >
                    <Text style={styles.btn_txt}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                    <Text style={styles.plain_txt}>Don't have an account yet? </Text>
                    <TouchableOpacity
                        style={styles.btn_2}
                        onPress={() => {
                            // Alert.alert('Simple Button pressed');
                            navigator.push("Register")
                        }}
                    >
                        <Text style={styles.btn_2_txt}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        marginBottom: 10,
        height: 80,
        width: 80,
    },
    header: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#06489c',
        marginBottom: 40,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 24,
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    container: {
        justifyContent: 'center',
        marginTop: 70,
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#fff',
        color: '#fff',
        borderRadius: 6,
    },
    label: {
        color: 'black',
        fontSize: 15,
        marginBottom: 5,
    },
    btn: {
        backgroundColor: '#06489c',
        borderColor: '#06489c',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    btn_txt: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    btn_2: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        borderRadius: 5,
    },
    btn_2_txt: {
        fontFamily: 'Roboto-Italic',
        color: '#e60000',
        fontSize: 19,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 60,
    },
    plain_txt: {
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto-Italic',
        paddingVertical: 6,
        borderRadius: 5,
        color: 'black',
        fontSize: 19,
    },
});

export default Login;
