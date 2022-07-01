import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Pages
import Home from '../screen/Home';
import Profile from '../screen/Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: 'red',
                    borderRadius: 15,
                    height: 90,
                    display: 'flex',
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 3, }}>
                        <Image
                            source={require('../assets/icons/001-home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#33adff' : '#5c5c8a',
                            }}
                        />
                    </View>
                )
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 3, }}>
                        <Image
                            source={require('../assets/icons/036-profile.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#33adff' : '#5c5c8a',
                            }}
                        />
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

export default Tabs;

// const style = StyleSheet.create({
//     shadow: {

//     },
// });