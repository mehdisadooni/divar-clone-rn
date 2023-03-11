import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Tabs} from "./Tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {fonts} from "../utils/fonts";
import HomeIndex from "../screens/home/Index";
import SearchModal from "../screens/home/Index/searchModal";

const RootStack = createStackNavigator();

export const Routes = () => {
    const theme = {
        colors: {
            background: '#fff'
        }
    }
    return (
        <NavigationContainer theme={theme}>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                <RootStack.Screen name="Tabs" component={Tabs}/>
                <RootStack.Group screenOptions={{presentation: 'modal'}}>
                    <RootStack.Screen name="SearchModal" component={SearchModal}/>
                </RootStack.Group>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
