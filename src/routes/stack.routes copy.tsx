import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
// import Home from "../screens/Home";
import Cards from "../screens/Cards";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){

  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
          name="home"
          component={Cards}
      />
    </Stack.Navigator>
  )
}