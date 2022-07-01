import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Splash = ({ navigation }) => {
    React.useEffect(() => {
        setTimeout(() => navigation.navigate("Login"), 1000);
    }, [])
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/alder_logo.png')} style={styles.logo} />
            <Text style={styles.title}>adler</Text>
        </View>
    )
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#06489c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 70,
        height: 70,
    },
    title: {
        color: '#fff',
        fontSize: 30,
    },
});