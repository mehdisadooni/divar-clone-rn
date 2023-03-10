import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {fonts} from "../../utils/fonts";
import AccountIndex from "../../screens/account/index";
import SettingsIndex from "../../screens/account/settings/index";

const Stack = createStackNavigator();

export const AccountStack = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTitleStyle: {
                    fontFamily: fonts.iranSansBold,
                },
            })}
        >
            <Stack.Screen
                name="AccountIndex"
                component={AccountIndex}
                options={{title: 'دیوار من'}}
            />

            <Stack.Screen
                name="SettingsIndex"
                component={SettingsIndex}
                options={{
                    title: 'تنظیمات',
                }}
            />

        </Stack.Navigator>
    )
}
