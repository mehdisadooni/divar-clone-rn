import React from "react";

import {TouchableNativeFeedback, View, Text} from "react-native";
import {styles} from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {colors} from "../../utils/colors";

const AccountMenu = props => {
    return (
        <TouchableNativeFeedback onPress={props.onPress} style={{
            paddingVertical: 10,
        }}>
            <View style={[styles.menuContainer, props.style]}>
                <View style={styles.menu}>
                    {props.icon}
                    <Text
                        style={{
                            marginLeft: 15,
                            fontSize: 15
                        }}
                    >{props.label}</Text>
                </View>
                <FontAwesome name="angle-left" color={colors.gray} size={15}/>
            </View>
        </TouchableNativeFeedback>
    )
}

export default AccountMenu