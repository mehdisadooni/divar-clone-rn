import {View, Text} from "react-native";
import React from "react";
import {styles} from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {colors} from "../../../utils/colors";

const HomeIndex = () => {
    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <View style={styles.searchContainer}>
                    <View style={styles.placeholder}>
                        <FontAwesome name='search' color={colors.gray} size={20}/>
                        <Text style={styles.placeholderText}>جستجو در همه ی آگهی ها</Text>
                    </View>
                    <View style={styles.location}>
                        <View style={styles.verticalLine}></View>
                        <Text style={styles.locationText}>تهران</Text>
                        <FontAwesome name='map-marker' color={colors.gray} size={20}/>
                    </View>
                </View>

                <View style={styles.categoriesContainer}>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default HomeIndex