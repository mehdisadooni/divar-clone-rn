import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Tabs} from "./Tabs";

const Stack = createNativeStackNavigator();

export const Routes = () => {
    const theme = {
        colors: {
            background: '#fff'
        }
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator>
                <Stack.Screen name={'Tabs'} component={Tabs} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
