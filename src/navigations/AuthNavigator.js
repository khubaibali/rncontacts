import { createStackNavigator } from "@react-navigation/stack"
import { View } from "react-native"
const Login =()=>{
    <View>
       <Text> Hi from Login</Text>
    </View>
}
export default Login

const SignUp =()=>{
    <View>
      <Text>
          Hi from SignUp
        </Text>  
    </View>
}
export default SignUp







const AuthNavigator = () =>{
    const AuthStack = createStackNavigator()
    return(
    <AuthStack.Navigator>
        <AuthStack.Screen name="login" component={Login}> </AuthStack.Screen>
        <AuthStack.Screen name="register" component={SignUp}> </AuthStack.Screen>
        
     </AuthStack.Navigator>   

    )
}
export default AuthNavigator