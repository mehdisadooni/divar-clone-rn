import React from "react";
import CategoriesIndex from "../screens/categories/Index";
import AddAdvertisingIndex from "../screens/addAdvertising/Index";
import ChatIndex from "../screens/chat/Index";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {colors} from "../utils/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {AccountStack} from "./stacks/AccountStack";
import {HomeStack} from "./stacks/HomeStack";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName='HomePage'
            screenOptions={({route}) => ({
                tabBarStyle: {
                    backgroundColor: colors.lightGray,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontFamily: 'iran-sans'
                },
                headerTitleStyle: {
                    fontFamily: 'iran-sans-bold',
                },
                tabBarInactiveTintColor: colors.gray,
                tabBarActiveTintColor: colors.red,
            })}
        >
            <Tab.Screen
                name={'Home'}
                component={HomeStack}

                options={{
                    title: 'آگهی ها',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="home" color={color} size={20}/>
                    ),
                }}
            />

            <Tab.Screen
                name={'Categories'}
                component={CategoriesIndex}
                options={{
                    title: 'دسته ها',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="list" color={color} size={20}/>
                    )

                }}
            />

            <Tab.Screen
                name={'AddAdvertisingIndex'}
                component={AddAdvertisingIndex}
                options={{
                    title: 'ثبت آگهی',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="plus-circle" color={color} size={20}/>
                    )
                }}
            />

            <Tab.Screen
                name={'ChatIndex'}
                component={ChatIndex}
                options={{
                    title: 'چت',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="comments" color={color} size={20}/>
                    ),
                }}
            />

            <Tab.Screen
                name={'MyDivar'}
                component={AccountStack}
                options={{
                    title: 'دیوار من',
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="user" color={color} size={20}/>
                    ),
                }}
            />

        </Tab.Navigator>
    )
}
