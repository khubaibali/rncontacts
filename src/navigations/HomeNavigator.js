import { createStackNavigator } from "@react-navigation/stack"
import { View } from "react-native"
const Contacts =()=>{
    <View>
        Hi from contacts
    </View>
}
export default Contacts

const ContactDetail =()=>{
    <View>
        Hi from contact Detail
    </View>
}
export default ContactDetail

const CreateContact =()=>{
    <View>
        Hi from create contacts
    </View>
}
export default CreateContact

const Settings =()=>{
    <View>
        Hi from setting
    </View>
}
export default Settings






const HomeNavigator = () =>{
    const HomeStack = createStackNavigator()
    return(
    <HomeStack.Navigator>
        <HomeStack.Screen name="contact" component={Contacts}> </HomeStack.Screen>
        <HomeStack.Screen name="contactDetail" component={ContactDetail}> </HomeStack.Screen>
        <HomeStack.Screen name="createcontact" component={CreateContact}> </HomeStack.Screen>
     </HomeStack.Navigator>   

    )
}
export default HomeNavigator