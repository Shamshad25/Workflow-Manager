import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../Navigation/Tabs';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Tabs'>
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AppNavigator