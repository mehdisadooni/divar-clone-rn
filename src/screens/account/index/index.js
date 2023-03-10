import React from "react";
import {View, Text, TouchableOpacity} from "react-native";


const AccountIndex = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate('SettingsIndex')}
            >
                <Text>setting</Text>
            </TouchableOpacity>
            <Text>AccountIndex Screen</Text>
        </View>
    )
}

export default AccountIndex