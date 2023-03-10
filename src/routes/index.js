import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Tabs} from "./Tabs";

export const Routes = () => {
    const theme = {
        colors: {
            background: '#fff'
        }
    }
    return (
        <NavigationContainer theme={theme}>
            <Tabs/>
        </NavigationContainer>
    )
}
