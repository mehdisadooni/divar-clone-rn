import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {fonts} from "../../utils/fonts";
import HomeIndex from "../../screens/home/Index";
import SearchModal from "../../screens/home/Index/searchModal";

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={({route}) => ({
                headerTitleStyle: {
                    fontFamily: fonts.iranSansBold,
                },
                headerShown: false,
                headerStyle: { backgroundColor: '#eae9e9' },
            })}
        >
            <Stack.Group>
                <Stack.Screen
                    name="HomeIndex"
                    component={HomeIndex}
                    options={{title: 'آگهی ها'}}
                />
            </Stack.Group>

        </Stack.Navigator>
    )
}
