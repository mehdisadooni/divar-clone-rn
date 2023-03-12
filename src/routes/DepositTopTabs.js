import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ToShop from "../screens/account/deposit/toShop";
import ForSale from "../screens/account/deposit/ForSale";
import {fonts} from '../utils/fonts';
import {colors} from "../utils/colors";

const Tab = createMaterialTopTabNavigator();

const DepositTopTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarInactiveTintColor: colors.drkGray,
                tabBarActiveTintColor: colors.red,
                tabBarStyle: {
                    backgroundColor: '#eae9e9',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.red,
                    height: 3,
                },
                tabBarLabelStyle: {
                    fontFamily: fonts.iranSans,
                    fontSize: 15
                }
            }}>
            <Tab.Screen name="ToShop" component={ToShop} options={{
                title: 'برای خرید',
            }}/>
            <Tab.Screen name="ForSale" component={ForSale} options={{
                title: 'برای فروش',

            }}/>
        </Tab.Navigator>
    );
}

export default DepositTopTabs