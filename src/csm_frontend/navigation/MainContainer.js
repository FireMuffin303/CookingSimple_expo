import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native"
import { View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AccountScreen from "./screens/AccountScreen";
import AddScreen from "./screens/AddScreen";
import { Ionicons } from '@expo/vector-icons';
import RegisterScreen from "./screens/RegisterScreen";

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) =>({
                    tabBarStyle: {
                        backgroundColor: '#F09540',
                    }
                })}

                tabBarOptions={{
                    activeTintColor: '#FFC28A', // Change this to the desired active tab color
                    inactiveTintColor: 'white', // Change this to the desired inactive tab color
                  }}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon:({color,size}) =>(
                        <Ionicons name="home" size={30} color={"white"}/>
                    )
                }}/>
                <Tab.Screen name="Add" component={AddScreen} options={{
                    tabBarIcon:({color,size}) =>(
                        <Ionicons name="ios-add" size={30} color={"white"}/>
                    )
                }}/>
                <Tab.Screen name="Account" component={AccountScreen} options={{
                    tabBarIcon:({color,size}) =>(
                        <Ionicons name="person" size={30} color={"white"}/>
                    )
                }}/>

                <Tab.Screen name="Register" component={RegisterScreen} options={{
                    tabBarIcon:({color,size}) =>(
                        <Ionicons name="person" size={30} color={"white"}/>
                    )
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}