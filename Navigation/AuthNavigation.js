import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import fontStyle from '../styles/fontStyle';
import { widthToDp, hightToDp } from '../styles/Responsive'
import EStyleSheet from 'react-native-extended-stylesheet';
import Login from '../Screens/Login';
import ForgotDetails from '../Screens/ForgotDetails'
import Signupinit from '../Screens/Signupinit'
import signUp from '../Screens/Signup'

// import Discover from '../screens/Discover'
const AuthStack = createStackNavigator();


const AuthNavigation = ({ navigation }) => {
    return (

        <AuthStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#0b263c',
                
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: EStyleSheet.value('20rem'),
                fontFamily: fontStyle. OpenSansRegular,
            }
        }}>

            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
             <AuthStack.Screen
                name="Forgot Password"
                component={ForgotDetails}
                // options={{
                //     headerShown: false,
                // }}
            />
              <AuthStack.Screen
                name="Signupinit"
                component={Signupinit}
                options={{
                    headerShown: false,
                }}
                
            />
              <AuthStack.Screen
                name="signUp"
                component={signUp}
                options={{
                    headerShown: false,
                }}
                
            />
           
        </AuthStack.Navigator>



    );
}




export default AuthNavigation;