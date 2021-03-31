import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import fontStyle from '../styles/fontStyle';
import {widthToDp, hightToDp} from '../styles/Responsive'
import EStyleSheet from 'react-native-extended-stylesheet';

 import Ionicons from 'react-native-vector-icons/Ionicons';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';

    const signUp = ({navigation}) => {
      
      const [value, setValue] = React.useState('');
      const [firstName, setFirstName] = React.useState('');
        const [lastName, setLastName] = React.useState('');
        const [phoneNumber, setPhoneNumber] = useState('')
        const [prefix, setPrefix] = useState('44')
        const [postcode, setPostcode] = useState('')
        const [date, setDate] = useState('');
        const [month, setMonth] = useState('');
        const [year, setYear] = useState('');
        const [showAddress, setShowAddress] = useState(false);

     const toggleAddress = () => {
        setShowAddress(!showAddress);
     };
      
      const titleLayout = () => {
        return (
          <View  >
            <Text style={[styles.text, {fontSize: 14}]}>Title</Text>

            <RadioButton.Group
              onValueChange={newValue => {
                console.log('new value : ', newValue);
                setValue(newValue);
              }}
              value={value}>
              <View style={styles.radioContainer}>
                <View
                  style={
                    value === 'MR'
                      ? {
                          flex: 1,
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginRight: 10,
                          ImageBackground: 'white',
                          borderBottomWidth: 1,
                          borderBottomColor: '#ffffff',
                          padding: 8,
                        }
                      : {
                          flex: 1,
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginRight: 10,
                          ImageBackground: 'white',
                          borderBottomWidth: 1,
                          borderBottomColor: '#77828c',
                          padding: 8,
                        }
                  }>
                  <Text style={styles.textInput}>MR</Text>
                  <RadioButton
                    uncheckedColor="rgba(255, 255, 255, 0.1)"
                    value="MR"
                  />
                </View>
                <View
                  style={
                    value === 'Ms'
                      ? {
                          flex: 1,
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginRight: 10,
                          ImageBackground: 'white',
                          borderBottomWidth: 1,
                          borderBottomColor: '#ffffff',
                          padding: 8,
                        }
                      : {
                          flex: 1,
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginRight: 10,
                          ImageBackground: 'white',
                          borderBottomWidth: 1,
                          borderBottomColor: '#77828c',
                          padding: 8,
                        }
                  }>
                  <Text style={styles.textInput}>Ms</Text>
                  <RadioButton
                    uncheckedColor="rgba(255, 255, 255, 0.1)"
                    value="Ms"
                  />
                </View>
              </View>
            </RadioButton.Group>
          </View>
        );
      };


    const Header = () => {
        return (
          <View style={{...styles.header}}>
            {/* <FontAwesome
              name={'sliders'}
              size={EStyleSheet.value('25rem')}
              color={'white'}
            /> */}
            <Text
              style={[
                styles.textInput,
                {
                  color: '#ffffff',
                  fontFamily: fontStyle.OpenSansBold,
                  marginTop: 0,
                  alignSelf: 'center',
                },
              ]}>
              Registration
            </Text>
            {/* <Ionicons
              name={'close-outline'}
              size={EStyleSheet.value('25rem')}
              color={'white'}
            /> */}
            <TouchableOpacity onPress={() => navigation.navigate("Signupinit")}>
            <Image
              style={[{height: hightToDp(4), width: widthToDp(4)}]}
              source={require('../Src/Assets/Images/close.png')}/>
              </TouchableOpacity>
          </View>
        );
      };

      // inputButton = () => {
      //   return (
      //     <View style={{flexDirection: 'row'}}>
      //       <View style={{marginLeft: 20, marginTop: 100, marginRight: 20}}>
      //         <Text
      //           style={{
      //             fontSize: EStyleSheet.value('12rem'),
      //             fontFamily: 'WorkSans',
      //             color: '#77828c',
      //             marginLeft: 5,
      //           }}>
      //           First Name
      //         </Text>
      //         <View
      //           style={firstName.length > 0 ? styles.action1 : styles.action}>
      //           <TextInput
      //             // placeholder="Email address
      //             value={firstName}
      //             isRequired={true}
      //             placeholderTextColor="#77828c"
      //             secureTextEntry={data.secureTextEntry ? true : false}
      //             style={styles.textInput}
      //             autoCapitalize="none"
      //             // onChangeText={(val) => handlePasswordChange(val)}
      //             onChangeText={text => setFirstName(text)}
      //           />
      //           <TouchableOpacity onPress={updateSecureTextEntry}>
      //             <Image
      //               style={styles.icon}
      //               source={require('../Src/Assets/Images/tick.png')}></Image>
      //           </TouchableOpacity>
      //         </View>
      //       </View>
      //     </View>
      //   );
      // };

      const addressLayout = () => {
        return (
          // <View
          //   style={{
          //     height: widthToDp(40),
          //     padding: widthToDp(2),
          //     backgroundColor: '#081D2E',
          //   }}>
          <ScrollView
            nestedScrollEnabled={true}
            scrollEnabled={true}
            style={{
              flex: 1,
              backgroundColor: 'white',
              height: widthToDp(40),
              padding: widthToDp(3),
              marginTop: hightToDp(1),
              backgroundColor: '#081D2E',
            }}>
            <View>
              <Text
                multiline={true}
                style={[
                  styles.text,
                  {color: '#ffffff', fontFamily: fontStyle.OpenSansRegular},
                ]}>
                MULTIPLEX CONSTRUCTION EUROPE LTD, 2 Plough Yard, LONDON BLACK
                {'\n\n'}
                ARCHITECTURE LTD, 3 Plough Yard, LONDON {'\n\n'}
                LEMON & CO, 3 Plough Yard, LONDON {'\n\n'}
                TWO UP DIGITAL LTD, 3 Plough Yard, LONDON{'\n\n'}
                11 Plough Yard, LONDON{'\n'}
              </Text>
           <View style={{height:1,backgroundColor:"rgba(119, 119, 136, 0.2)",marginBottom:10}}></View>
              <Text
                style={[
                  styles.text,
                  {
                    color: '#ffffff',
                    fontFamily: fontStyle.OpenSansRegular,
                    marginBottom: hightToDp(3),
                  },
                ]}>
                Can’t find your address?
                <Text
                  style={[
                    styles.text,
                    {
                      fontFamily: fontStyle.OpenSansBold,
                      fontSize: 14,
                      color: '#00ff78',
                    },
                  ]}>
                  {' '}
                  Enter Manually
                </Text>
              </Text>
            </View>
          </ScrollView>
          // </View>
        );
      }

      //render() {
      return (
        <ScrollView
          nestedScrollEnabled={true}
          style={[styles.container, {paddingHorizontal: widthToDp(1)}]}>
          <Header />
          <View style={styles.container}>
            {titleLayout()}

            <View style={{flexDirection: 'column', marginTop: '5%'}}>
              <Text style={styles.text}>First Name</Text>
              <View
                style={firstName.length > 0 ? styles.action1 : styles.action}>
                <TextInput
                  value={firstName}
                  isRequired={true}
                  placeholderTextColor="#77828c"
                  style={styles.textInput}
                  autoCapitalize="words"
                  onChangeText={text => setFirstName(text)}
                />
                <TouchableOpacity>
                  {firstName.length <= 0 ? null : (
                    <Image
                      style={styles.icon1}
                      source={require('../Src/Assets/Images/tick.png')}></Image>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection: 'column', marginTop: '5%'}}>
              <Text style={styles.text}>Last Name</Text>
              <View
                style={lastName.length > 0 ? styles.action1 : styles.action}>
                <TextInput
                  value={lastName}
                  isRequired={true}
                  placeholderTextColor="#77828c"
                  style={styles.textInput}
                  autoCapitalize="words"
                  onChangeText={text => setLastName(text)}
                />
                <TouchableOpacity>
                  {lastName.length <= 0 ? null : (
                    <Image
                      style={styles.icon1}
                      source={require('../Src/Assets/Images/tick.png')}></Image>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flexDirection: 'column', marginTop: '5%'}}>
              <Text style={styles.text}>Date of birth</Text>
              <View
                style={date.length > 0 &&
                  month.length >0 &&
                  year.length > 0  ? styles.action1: styles.action}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <TextInput
                    value={date}
                    isRequired={true}
                    placeholder={'DD'}
                    placeholderTextColor="#77828c"
                    style={[styles.textInput, {}]}
                    autoCapitalize="none"
                    keyboardType={'number-pad'}
                    onChangeText={text => setDate(text)}
                  />
                  <View
                    style={{
                      height: '80%',
                      width: 1,
                      backgroundColor: '#77828c',
                    }}
                  />
                  <TextInput
                    value={month}
                    isRequired={true}
                    placeholder={'MM'}
                    placeholderTextColor="#77828c"
                    style={[styles.textInput, {}]}
                    autoCapitalize="none"
                    keyboardType={'number-pad'}
                    onChangeText={text => setMonth(text)}
                  />
                  <View
                    style={{
                      height: '80%',
                      width: 1,
                      backgroundColor: '#77828c',
                    }}
                  />
                  <TextInput
                    value={year}
                    isRequired={true}
                    placeholder={'YYYY'}
                    placeholderTextColor="#77828c"
                    style={[styles.textInput, {}]}
                    autoCapitalize="none"
                    keyboardType={'number-pad'}
                    onChangeText={text => setYear(text)}
                  />
                  <TouchableOpacity>
                    {date.length > 0 &&
                    month.length > 0 &&
                    year.length > 0 ? (
                      <Image
                        style={styles.icon1}
                        source={require('../Src/Assets/Images/tick.png')}></Image>
                    ) : null}
                  </TouchableOpacity>
                </View>
              </View>

              <Text
                style={[styles.text, {fontSize: 10}]}>
                Age restriction: It is an offence to gamble if you are under 18
              </Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row', marginTop: '5%'}}>
              <View
                style={{flex: 0.4, flexDirection: 'column', marginTop: '5%'}}>
                <Text style={styles.text}>Prefix</Text>
                <View
                  style={
                    prefix.length > 0
                      ? {
                          flex: 1,
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginRight: 10,
                          ImageBackground: 'white',
                          borderBottomWidth: 1,
                          borderBottomColor: '#ffffff',
                          padding: 8,
                        }
                      : {
                          flex: 1,
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginRight: 10,
                          ImageBackground: 'white',
                          borderBottomWidth: 1,
                          borderBottomColor: '#77828c',
                          padding: 8,
                        }
                  }>
                  <TextInput
                    value={'+' + prefix}
                    isRequired={true}
                    placeholderTextColor="#77828c"
                    style={styles.textInput}
                    autoCapitalize="words"
                    keyboardType={'number-pad'}
                    onChangeText={text => setPrefix(text.substring(1))}
                  />
                  <TouchableOpacity>
                    {prefix.length <= 0 ? null : (
                      <Image
                        style={styles.icon1}
                        source={require('../Src/Assets/Images/icon-down.png')}></Image>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flex: 0.6,
                  flexDirection: 'column',
                  marginLeft: '5%',
                  marginTop: '5%',
                }}>
                <Text style={styles.text}>Phone number</Text>
                <View
                  style={
                    phoneNumber.length > 0 ? styles.action1 : styles.action
                  }>
                  <TextInput
                    value={phoneNumber}
                    isRequired={true}
                    placeholderTextColor="#77828c"
                    style={styles.textInput}
                    autoCapitalize="words"
                    keyboardType={'number-pad'}
                    onChangeText={text => setPhoneNumber(text)}
                  />
                  <TouchableOpacity>
                    {phoneNumber.length <= 0 ? null : (
                      <Image
                        style={styles.icon1}
                        source={require('../Src/Assets/Images/tick.png')}></Image>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{flexDirection: 'column', marginTop: '5%'}}>
              <Text style={styles.text}>Enter postcode</Text>
              <View
                style={postcode.length > 0 ? styles.action1 : styles.action}>
                <TextInput
                  value={postcode}
                  isRequired={true}
                  placeholderTextColor="#77828c"
                  style={styles.textInput}
                  autoCapitalize="words"
                  onChangeText={text => setPostcode(text)}
                />
                <TouchableOpacity>
                  {postcode.length <= 0 ? null : (
                    <Image
                      style={styles.icon1}
                      source={require('../Src/Assets/Images/tick.png')}></Image>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.search}
              onPress={() => toggleAddress()}>
              <Text
                style={[
                  styles.text,
                  {
                    fontFamily: fontStyle.OpenSansBold,
                    fontSize: 16,
                    color: '#00ff78',
                  },
                ]}>
                Search
              </Text>
            </TouchableOpacity>

            {showAddress ? addressLayout() : null}
            <View style={{marginTop: hightToDp(2)}}>
              <Text
                style={[styles.text, {fontSize: 12}]}>
                By clicking the ‘Agree and Join’ button below you confirm that
                you are 18 or over and you accept the
                <Text
                  style={[
                    styles.text,
                    {
                      fontFamily: fontStyle.OpenSansBold,
                      fontSize: 12,
                      color: '#00ff78',
                    },
                  ]}>
                  {' '}
                  Terms & Conditions
                </Text>
                <Text
                  style={[styles.text, {fontSize: 12}]}>
                  {' '}
                  and{' '}
                </Text>
                <Text
                  style={[
                    styles.text,
                    {
                      fontFamily: fontStyle.OpenSansBold,
                      fontSize: 12,
                      color: '#00ff78',
                    },
                  ]}>
                  {' '}
                  Privacy Policy
                </Text>
              </Text>
            </View>
            <View style={styles.Button}>
              <Text style={styles.buttonText}>Agree & Join</Text>
            </View>
          </View>
        </ScrollView>
      );
      //}
    };

export default signUp;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: '2%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(119, 119, 136, 0.2)',
    padding: widthToDp(3),
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0b263c',
    paddingHorizontal: widthToDp(4),
    paddingBottom:30
  },
  radioContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ffffff',
  },
  innerContainer: {},
  image: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#0b263c',
    // justifyContent: "center"
  },
  text: {
    flex: 1,
    color: '#77828c',
    fontSize:12,
    fontFamily: fontStyle.OpenSansRegular,
  },
  action: {
    flexDirection: 'row',
    // marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#77828c',
  },
  action1: {
    flexDirection: 'row',
    // marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#00ff78',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    fontSize: 14,
   
    color: '#ffffff',
    fontFamily: fontStyle.OpenSansRegular,
  },
  icon: {
    tintColor: '#77828c',
    height: 16,
    width: 25,
    marginRight: 10,
  },
  icon1: {
    tintColor: '#00ff78',
    height: 16,
    width: 25,
    marginRight: 10,
  },
  Button: {
    borderWidth: 1,
    flexDirection: 'column',
    padding: 10,
    // padding: 16,
    marginTop: 36,
    borderRadius: 4,
    backgroundColor: '#00ff78',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  buttonText: {
    fontFamily: 'OpenSans',
    fontSize: 20,
    fontStyle: 'normal',
    textAlign: 'center',
    //  letterSpacing: 0,
    color: '#081d2e',
    fontFamily: fontStyle.OpenSansBold,
  },
  baseText: {},
  innerText: {
    color: '#081d2e',
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 4,
    marginTop: '5%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00ff78',
  },
});
