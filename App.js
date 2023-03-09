import {SafeAreaProvider} from "react-native-safe-area-context";
import React from "react";
import { I18nManager } from "react-native";
import {Routes} from "./src/Routes";

export default function App() {

    I18nManager.forceRTL(true);
    I18nManager.allowRTL(true);

    return (
        <SafeAreaProvider>
            <Routes/>
        </SafeAreaProvider>
    );
}
