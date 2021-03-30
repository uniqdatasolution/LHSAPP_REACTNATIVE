import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <ImageBackground source= {require('../Src/Assets/Images/pattern-background.jpg')} style={styles.image}>
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b263c",
       flexDirection:'column',
     
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        tintColor:"#0b263c",
        //  backgroundColor:"#0b263c",
      
        // justifyContent: "center"
      },
});