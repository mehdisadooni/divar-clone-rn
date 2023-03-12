import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Tabs} from "./Tabs";
import {createStackNavigator} from "@react-navigation/stack";
import SearchModal from "../screens/home/Index/searchModal";
import DepositTopTabs from "./DepositTopTabs";
import {fonts} from "../utils/fonts";

const RootStack = createStackNavigator();
const Stack = createStackNavigator();

export const Routes = () => {
    const theme = {
        colors: {
            background: '#fff'
        }
    }
    return (
        <NavigationContainer theme={theme}>
            <RootStack.Navigator screenOptions={
                {
                    headerTitleStyle: {
                        fontFamily: fonts.iranSansBold,
                    },
                    headerShown: false,
                    headerStyle: {backgroundColor: '#eae9e9'}
                }
            }>
                <RootStack.Screen name="Tabs" component={Tabs}/>
                <RootStack.Group screenOptions={{presentation: 'modal'}}>
                    <RootStack.Screen name="SearchModal" component={SearchModal}/>
                </RootStack.Group>
                <Stack.Screen
                    name="DepositTopTabs"
                    component={DepositTopTabs}
                    options={{
                        title: 'امکان بیعانه (آزمایشی)',
                        headerShown: true
                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}
