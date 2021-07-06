import React,{useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'
import AuthNavigator from './AuthNavigator'
import { GlobalContext } from '../context/Provider'
const AppNavContainer = () => {
  // const isLoggedIn = true
  const {authState} = useContext(GlobalContext)
  console.log('>>',authState)
  // const {
  //   authState:{isLoggedIn},
  // } = useContext(GlobalContext)
    return(
        <NavigationContainer>
          {true ?  <DrawerNavigator/> :<AuthNavigator/>} 
        </NavigationContainer>
    )
}

export default AppNavContainer;