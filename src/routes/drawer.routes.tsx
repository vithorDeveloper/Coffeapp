import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons"
import Home from "../screens/Home";
import StackRoutes from "./stack.routes copy";
import {  View, Text } from 'react-native';

const Drawer = createDrawerNavigator()

function CustomHeaderBackground() {
  return (
    <View style={{ flex:1, paddingTop: 20, backgroundColor: '#131316', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#bbb', fontSize: 30 }}>Coffee Store</Text>
    </View>
  );
}

export default function DrawerRoutes(){

  return(
    <Drawer.Navigator 
        screenOptions={{
          title:'',
          headerBackground: () => <CustomHeaderBackground />
        }}
        >
      <Drawer.Screen 
          name="home"
          component={Home}
          options={{
            drawerIcon: ({color,size}) => <Feather name="home" color={color} size={size}/>,
            drawerLabel: 'Home',
            drawerStyle: {
              backgroundColor: '#c6cbef',
              width: 200,
            },
          }}
      />

    <Drawer.Screen 
          name="cards"
          component={StackRoutes}
          options={{
            drawerIcon: ({color,size}) => <Feather name="gift" color={color} size={size}/>,
            drawerLabel: 'Gift Cards'
          }}
      />
    </Drawer.Navigator>
  )
}