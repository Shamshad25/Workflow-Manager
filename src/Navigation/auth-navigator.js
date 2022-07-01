import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screen/login';
import Register from '../screen/Register';
import Splash from '../screen/Splash';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AuthNavigator