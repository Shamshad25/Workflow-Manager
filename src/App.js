import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screen/login';
import React from 'react';
import Register from './screen/Register';
import Tabs from './Navigation/Tabs';
import Splash from './screen/Splash';
import { LogBox } from 'react-native';
import Calender from './Components/Calender';
import Machine from './screen/Machine';
import ProcessSheet from './screen/ProcessSheet';

const ParentStack = createStackNavigator();

const App = () => {
  LogBox.ignoreAllLogs(true);
  return (
    <NavigationContainer>
      <ParentStack.Navigator
        initialRouteName='Splash'
      >
        <ParentStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <ParentStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <ParentStack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <ParentStack.Screen name='Tabs' component={Tabs} options={{ headerShown: false }} />
        <ParentStack.Screen name='Calender' component={Calender} options={{ headerShown: false }} />
        <ParentStack.Screen name="ProcessSheet" component={ProcessSheet} options={{ headerShown: false }} />
        <ParentStack.Screen name="Machine" component={Machine} options={{ headerShown: false }} />
      </ParentStack.Navigator>
    </NavigationContainer>
  );
};


export default App;
