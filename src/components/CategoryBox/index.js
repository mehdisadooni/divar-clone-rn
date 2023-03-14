import {Image, Pressable, Text, View} from "react-native";
import React from "react";
import {styles} from "./styles";
import {colors} from "../../utils/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const CategoryBox = ({id, title, icon, onPress, isFirst}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.imageContainer}>
                <FontAwesome name={icon} color={colors.gray} size={20}/>
            </View>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}


export default CategoryBox