import React, { useState } from 'react';
import {
    View, Text, Button, StyleSheet, ImageBackground, Image, ScrollView, StatusBar, TouchableOpacity,
    TextInput
} from 'react-native';
import { actuatedNormalizeH, scaleW, actuatedNormalizeW, scaleH, width, height } from '../Src/Assets/Layout/Dimension';
import Feather from 'react-native-vector-icons/Feather';
import fontStyle from '../styles/fontStyle';
import { widthToDp, hightToDp } from '../styles/Responsive'
// import EStyleSheet from 'react-native-extended-stylesheet';
// EStyleSheet.build();
const Signupinit = ({ navigation }) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [data, setData] = React.useState({
        // username: '',
        // password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        securepasswordEntry: true

    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updatesecurepasswordEntry = () => {
        setData({
            ...data,
            securepasswordEntry: !data.securepasswordEntry
        });
    }
    return (
        <View style={styles.container}>

            {/* <ScrollView> */}
            <ImageBackground source={require('../Src/Assets/Images/pattern-background.png')} style={styles.backgroundImage}>
                <StatusBar backgroundColor='#0b263c' barStyle="light-content" />

                <View style={styles.child}>

                    <View style={styles.imageView}>
                        <Image source={require('../Src/Assets/Images/logo.png')}>
                        </Image>

                    </View>
                    <ScrollView>
                        <View>
                            <View style={{ marginLeft: 20, marginTop: 60, marginRight: 20 }}>
                            <View style={{flexDirection: 'column', marginTop: '5%'}}>
              <Text style={{ flex: 1,
    color: '#77828c',
    fontSize: 12,
    fontFamily: fontStyle. OpenSansRegular,}}>Email</Text>
              <View
                style={email.length > 0 ? styles.action1 : styles.action}>
                <TextInput
                 
                  value={email}
                  keyboardType="email-address" ß
                  isRequired={true}
                 
                  placeholderTextColor="#77828c"
                  style={styles.textInput}
                  autoCapitalize="words"
                  onChangeText={text => setemail(text)}
                />
                <TouchableOpacity>
                  {email.length <= 0 ? null : (
                    <Image
                      style={{ tintColor: '#00ff78',
                      height: 16,
                      width: 25,
                      marginRight: 10,}}
                      source={require('../Src/Assets/Images/tick.png')}></Image>
                  )}
                </TouchableOpacity>
              </View>
            </View>
                                {/* <Text style={{
                                    fontSize: EStyleSheet.value('14rem'),
                                    fontFamily: fontStyle. OpenSansRegular,
                                    color: '#77828c', marginLeft: 5
                                }}>Email</Text>
                                <View style={email.length > 0 ? styles.action1 : styles.action}>


                                    <TextInput
                                        // placeholder="Email address
                                        value={email}
                                        keyboardType="email-address" ß
                                        isRequired={true}
                                        placeholderTextColor="#77828c"
                                        // secureTextEntry={data.secureTextEntry ? true : false}
                                        style={styles.textInput}
                                        autoCapitalize="none"
                                        // onChangeText={(val) => handlePasswordChange(val)}
                                        onChangeText={(text) => setemail(text)}
                                    /> */}
                                    {/* <TouchableOpacity
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
                                </TouchableOpacity> */}
                                {/* </View>
 */}


                            </View>

                            <View style={{ marginLeft: 20, marginTop: 20, marginRight: 20 }}>
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: fontStyle. OpenSansRegular,
                                    color: '#77828c', marginLeft: 5
                                }}>Create password</Text>
                                <View style={password.length > 0 ? styles.action1 : styles.action}>


                                    <TextInput
                                        // placeholder="Email address
                                        value={password}
                                        isRequired={true}
                                        placeholderTextColor="#77828c"
                                        secureTextEntry={data.securepasswordEntry ? true : false}
                                        style={styles.textInput}
                                        autoCapitalize="none"
                                        // onChangeText={(val) => handlePasswordChange(val)}
                                        onChangeText={(text) => setpassword(text)}
                                    />
                                    <TouchableOpacity
                                        onPress={updatesecurepasswordEntry}
                                    >
                                        {data.securepasswordEntry ?
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
                            <TouchableOpacity onPress={() => navigation.navigate("signUp")}>
                                <View style={styles.Button}>
                                    <Text style={styles.buttonText}>Continue</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.signup}>
                                <Text style={{
                                    fontSize: 12,
                                    fontFamily: fontStyle. OpenSansRegular, fontWeight: "normal", textAlign: 'center', color: "#ffffff"
                                }}> Have an account ? <Text onPress={() => navigation.navigate("Login")} style={{
                                    fontWeight: "bold", color: "#00ff78", fontSize: 12,
                                    fontFamily: fontStyle. OpenSansRegular, textAlign: "center"
                                }}>Sign In</Text></Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </ImageBackground>
            {/* </ScrollView> */}
        </View>

    );
};

export default Signupinit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
        marginTop: 0

    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90,

    },

    child: {
        flex: 1,


    },
    action: {
        flexDirection: 'row',
        // marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#77828c',
        // padding: ,

    },
    action1: {
        flexDirection: 'row',
        // marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#00ff78',
        // padding: 8,

    },
    textInput: {

        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        // paddingLeft: 10,
        // color: '#05375a',
        fontSize: 14,
        fontFamily: fontStyle. OpenSansRegular,
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
        marginTop: 36,
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
        // width: 55,
        //  height: 50,
        fontSize: 20,
        fontFamily: fontStyle. OpenSansRegular,
        fontWeight: "bold",
        fontStyle: 'normal',
        textAlign: "center",
        //  letterSpacing: 0,
        color: "#081d2e"
    },
    signup: {

        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
        // marginRight: 99,
        // marginLeft: 55,
        // marginBottom: 30

    }

});