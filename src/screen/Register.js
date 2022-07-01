import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import CustomInput from '../Components/CustomInput';

const Register = () => {
    const navigator = useNavigation();
    const [error, setError] = useState({ firstName: "", lastName: "", number: '', email: '', password: '' })
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = () => {
        if (firstName.trim() == '') {
            setError({ ...error, firstName: 'Please enter first name' })
        } else if (email == '') {
            setError({ ...error, email: 'Please enter email' })
        } else if (password == '') {
            setError({ ...error, password: 'Password should be atleast 8 character long' })
        } else if (confirmPassword == '') {
            setError({ ...error, confirmPassword: "Did not matched with password" })
        } else {
            setError({ firstName: "", lastName: "", number: '', email: '', password: '', confirmPassword: '' });
            navigator.push("Login");
        }
    }




    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#e6ffff', }}
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={Platform.OS === 'android'}
            enableAutomaticScroll={true}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <Image source={require('../assets/images/alder_logo.png')} style={styles.logo} />
                    <Text style={styles.header}>Create an Adler Account.</Text>
                    <Text style={styles.label}>Full Name</Text>
                    <CustomInput
                        placeholder='full name'
                        name={'fullName'}
                        value={firstName}
                        onChangeHandler={(text) => setFirstName(text)}
                        errorText={error.firstName}
                    />
                    <Text style={styles.label}>Email</Text>
                    <CustomInput
                        placeholder='email'
                        name={'email'}
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
                    <Text style={styles.label}>Confirm Password</Text>
                    <CustomInput
                        placeholder='confirm password'
                        name={'cpnfirm password'}
                        value={confirmPassword}
                        onChangeHandler={(text) => setConfirmPassword(text)}
                        errorText={error.confirmPassword}
                        secure={true}
                    />
                    <TouchableOpacity
                        onPress={onSubmit}
                        style={styles.btn}
                    >
                        <Text style={styles.btn_txt}>Sign up</Text>
                    </TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.plain_txt}>Already have an account?</Text>
                        <TouchableOpacity
                            style={styles.btn_2}
                            onPress={() => {
                                navigator.push("Login")
                            }}
                        >
                            <Text style={styles.btn_2_txt}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>
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
        marginBottom: 25,
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
        marginTop: 50,
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        marginLeft: 15,
        marginBottom: 10,
        borderColor: '#fff',
        color: 'black',
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
        marginBottom: 40,
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
        alignSelf: 'center',
        paddingVertical: 6,
        paddingHorizontal: 5,
        borderRadius: 5,
    },
    btn_2_txt: {
        fontFamily: 'Roboto-Italic',
        color: '#06489c',
        fontSize: 19,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
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

export default Register;
