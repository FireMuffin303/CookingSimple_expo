import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native"
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import AddScreen from "./screens/AddScreen";

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home Screen" component={HomeScreen}/>
                <Tab.Screen name="Add" component={AddScreen}/>
                <Tab.Screen name="Account Screen" component={AccountScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}