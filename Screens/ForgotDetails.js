import React, { useState } from 'react';
import {
    View, Text, Button, StyleSheet, ImageBackground, Image, ScrollView, StatusBar, TouchableOpacity,
    TextInput
} from 'react-native';
import { actuatedNormalizeH, scaleW, actuatedNormalizeW, scaleH, width, height } from '../Src/Assets/Layout/Dimension';
import Feather from 'react-native-vector-icons/Feather';
import fontStyle from '../styles/fontStyle';
import {widthToDp, hightToDp} from '../styles/Responsive'
import EStyleSheet from 'react-native-extended-stylesheet';
const ForgotDetails = ({ navigation }) => {
    const [email, setemail] = useState('');
    const [success, setsucess] = useState(false);
    const [data, setData] = React.useState({
        // username: '',
        // password: '',

        secureTextEntry: true,



    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const forgothandle = () => {
        setsucess(true)
        // navigation.navigate("Login")
    }
    return (
        <View style={styles.container}>
            {success == false ?
                <ScrollView>
                    <View style={styles.view}>
                        <Text style={styles.text}>
                            Enter your email address associated with your account and we’ll send you a link to reset your password.
                        </Text>
                    </View>
                    <View style={{ marginLeft: 20, marginTop: 20, marginRight: 20 }}>
                        <Text style={{
                            fontSize: 12,
                            fontFamily: fontStyle. OpenSansRegular,
                            color: '#77828c', marginLeft: 5
                        }}>Email address</Text>
                        <View style={email.length > 0 ? styles.action1 : styles.action}>


                            <TextInput
                                // placeholder="Email address
                                value={email}
                                isRequired={true}
                                placeholderTextColor="#77828c"
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                // onChangeText={(val) => handlePasswordChange(val)}
                                onChangeText={(text) => setemail(text)}
                            />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    //   <Feather
                                    //     name="eye-off"
                                    //     color="grey"sss
                                    //     size={20}
                                    //   />
                                    <Image style={styles.icon} source={require('../Src/Assets/Images/icon-right.png')}></Image>
                                    :
                                    <Image style={styles.icon1} source={require('../Src/Assets/Images/icon-eye-open.png')}></Image>
                                }
                            </TouchableOpacity>
                        </View>



                    </View>
                    <TouchableOpacity onPress={() => { forgothandle() }}>
                        <View style={styles.Button}>
                            <Text style={styles.buttonText}>Send Link</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                :
                <ScrollView>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center", marginTop: 60
                    }}>
                        <Image style={{ width: 112, height: 112 }} source={require('../Src/Assets/Images/success.png')}></Image>
                    </View>
                    <View >
                        <Text style={{ fontSize: 22,
        fontFamily: fontStyle. OpenSansRegular, fontWeight: "bold", textAlign: 'center', marginTop: 20, color: "#ffffff" }}>
                            Link Sent Successfully
                         </Text>
                        <Text style={{ fontSize: 14,
        fontFamily: fontStyle. OpenSansRegular, fontWeight: "normal", textAlign: 'center',  marginTop: 5, color: "#ffffff", letterSpacing: 0.4 }}>
                            Please check your inbox and junk folder
                         </Text>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}>
                            <View style={styles.Button}>
                                <Text style={styles.buttonText}>Back To Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            }
        </View>
    );
};

export default ForgotDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b263c',

        // alignItems: 'center', 
        // justifyContent: 'center'
    },
    view: {
        // width: 320,
        // height: 58,

        margin: 20,
    },
    text: {
        fontSize: 14,
        fontFamily: fontStyle.OpenSansRegular,
        fontWeight: 'normal',
        letterSpacing: 0.4,
        textAlign: 'left',
        color: "#ffffff"
    },
    action: {
        flexDirection: 'row',
        // marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#77828c',
        // padding: 8,

    },
    action1: {
        flexDirection: 'row',
        // marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        // padding: 8,

    },
    textInput: {

        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        // paddingLeft: 10,
        // color: '#05375a',
        fontSize: 14,
        fontFamily: "WorkSans",
        color: '#ffffff',

    },
    icon: {
        tintColor: "#77828c",
        height: 20, width: 30,
        marginRight: 10
    },
    icon1: {
        tintColor: "#ffffff",
        height: 20, width: 30,
        marginRight: 10
    },
    Button: {
        // height: 48,
        // width: 320,
        borderWidth: 1,
        flexDirection: 'column',
         padding: 10,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 4,
        backgroundColor: '#00ff78',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',

    },
    buttonText:
    {
        // width: 100,
        //  height: 30,
        fontSize: 20,
        fontFamily: fontStyle. OpenSansRegular,
        fontWeight: "bold",
        fontStyle: 'normal',
        textAlign: "center",
        //  letterSpacing: 0,
        color: "#081d2e"
    },
});