import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {fonts} from "../../utils/fonts";
import AccountIndex from "../../screens/account/index";
import SettingsIndex from "../../screens/account/settings/index";
import DepositTopTabs from "../DepositTopTabs";

const Stack = createStackNavigator();

export const AccountStack = () => {
    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerTitleStyle: {
                    fontFamily: fonts.iranSansBold,
                },
                headerStyle: {backgroundColor: '#eae9e9'},
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
