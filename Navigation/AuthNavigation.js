import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';

// import Discover from '../screens/Discover'
const AuthStack = createStackNavigator();


const AuthNavigation = ({ navigation }) => {
    return (

        <AuthStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#FFFFFF',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>

            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
           
        </AuthStack.Navigator>



    );
}




export default AuthNavigation;