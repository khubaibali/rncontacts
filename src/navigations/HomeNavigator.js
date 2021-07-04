import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { View ,Text} from "react-native"

const Contacts = () => {
    return (
        <View>
            <Text>Hi from contacts</Text> 
        </View>
        )
}


const ContactDetail = () => {
    return (
    <View>
        <Text>Hi from Contact Detail</Text> 
    </View>)
}


const CreateContact = () => {
    return (
    <View>
         <Text>Hi from Create contacts</Text> 
    </View>)
}


const Settings = () => {
    return (
    <View>
         <Text>Hi from settings contacts</Text> 
    </View>)
}



const HomeNavigator = () => {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator >
            <HomeStack.Screen name="Contacts" component={Contacts}/> 
            <HomeStack.Screen name="contactDetail" component={ContactDetail}/> 
            <HomeStack.Screen name="createContact" component={CreateContact}/> 
            <HomeStack.Screen name="Settings" component={Settings}/> 
        </HomeStack.Navigator>

    )
}
export default HomeNavigator