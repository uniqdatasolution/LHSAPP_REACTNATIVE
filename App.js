
import React, { useEffect,useState } from 'react';
import { View, ActivityIndicator, Dimensions, Platform } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';


import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';
// import{ AuthContext } from './Components/Context';
// import DrawerContent from './Screens/DrawerContent'
// import AuthNavigation from './SRC/Navigation/AuthNavigation'
import AuthNavigation from './Navigation/AuthNavigation'

import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({
  $rem: entireScreenWidth / (Platform.OS === 'ios' ? 380 : 450),
});

const App = ({navigation}) => {
  
  return (
    <PaperProvider>
  
       <NavigationContainer >

          <AuthNavigation/>
         
        </NavigationContainer>
       
        </PaperProvider>
  
    
      );
    }

    export default App;
