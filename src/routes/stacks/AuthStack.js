import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {fonts} from "../../utils/fonts";
import CellphoneStep from "../../screens/account/auth/login/cellphoneStep";
import CodeStep from "../../screens/account/auth/login/codeStep";

const Stack = createStackNavigator();

export const AuthStack = () => {
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
                name="CellphoneStep"
                component={CellphoneStep}
                options={{title: 'ورود به حساب کاربری'}}
            />

            <Stack.Screen
                name="CodeStep"
                component={CodeStep}
                options={{title: 'ورود به حساب کاربری'}}
            />

        </Stack.Navigator>
    )
}
