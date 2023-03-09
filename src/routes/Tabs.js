import React from "react";
import HomeIndex from "../screens/home/Index";
import CategoriesIndex from "../screens/categories/Index";
import AddAdvertisingIndex from "../screens/addAdvertising/Index";
import ChatIndex from "../screens/chat/Index";
import MyDivarIndex from "../screens/myDivar/Index";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {colors} from "../utils/color";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarStyle: {
                backgroundColor: colors.lightGray,
                paddingBottom: 5,
                paddingTop: 5,
            },
            tabBarLabelStyle: {
                fontSize:11,
                fontFamily:'iran-sans'
            },
            tabBarInactiveTintColor: colors.gray,
            tabBarActiveTintColor: colors.red,
        })}
        >
            <Tab.Screen
                name={'Home'}
                component={HomeIndex}
                options={{
                    headerShown: false,
                    title: 'آگهی ها',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="home" color={color} size={20}/>
                    )
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
                        <FontAwesome name="plus" color={color} size={20}/>
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
                component={MyDivarIndex}
                options={{
                    title: 'دیوار من',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="user" color={color} size={20}/>
                    )
                }}
            />

        </Tab.Navigator>
    )
}
