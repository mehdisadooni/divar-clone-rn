import {SafeAreaProvider} from "react-native-safe-area-context";
import React, {useCallback, useEffect, useState} from "react";
import {I18nManager} from "react-native";
import {Routes} from "./src/routes";
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import 'react-native-gesture-handler';



SplashScreen.preventAutoHideAsync().then(r => console.log(r));

const App = () => {

    React.useEffect(() => {
        I18nManager.forceRTL(true);
        I18nManager.allowRTL(true);
    }, [])

    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    'iran-sans': require('./src/assets/fonts/ttf/IRANSansWeb.ttf'),
                    'iran-sans-bold': require('./src/assets/fonts/ttf/IRANSansWeb_Bold.ttf')
                });
                // Artificially delay for two seconds to simulate a slow loading
                // experience. Please remove this if you copy and paste the code!
                await new Promise(resolve => setTimeout(resolve, 2000));
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare().then(r => console.log(r));
    }, []);


    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);


    if (!appIsReady) {
        return null;
    }

    return (
        <SafeAreaProvider onLayout={onLayoutRootView}>
            <Routes/>
        </SafeAreaProvider>
    );
}

export default App