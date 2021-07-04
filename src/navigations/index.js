import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'
import AuthNavigator from './AuthNavigator'
import HomeNavigator from './HomeNavigator'
import {Text} from 'react-native'
const AppNavContainer = () => {
    return(
        <NavigationContainer>
         {/* <HomeNavigator/> */}
          {/* <AuthNavigator/> */}
          <DrawerNavigator/>
          
        </NavigationContainer>
    )
}

export default AppNavContainer;