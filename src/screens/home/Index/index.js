import {View, Text, FlatList, Pressable} from "react-native";
import React from "react";
import {styles} from "./styles";
import {SafeAreaView} from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {colors} from "../../../utils/colors";
import {CATEGORIES} from "../../../Data/Categories";
import CategoryBox from "../../../components/CategoryBox";

const HomeIndex = ({navigation}) => {

    const renderCategoryItem = ({item, index}) => (
        <CategoryBox
            {...item}
            onPress={() => console.log(item?.id)}
            isFirst={index === 0}/>
    )

    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <View style={styles.searchContainer}>
                    <Pressable
                        onPress={() => navigation.navigate('SearchModal')}
                        style={styles.placeholder}
                    >
                        <FontAwesome name='search' color={colors.gray} size={20}/>
                        <Text style={styles.placeholderText}>جستجو در همه ی آگهی ها</Text>
                    </Pressable>
                    <View style={styles.location}>
                        <View style={styles.verticalLine}></View>
                        <Text style={styles.locationText}>تهران</Text>
                        <FontAwesome name='map-marker' color={colors.gray} size={20}/>
                    </View>
                </View>

                <View style={styles.categoriesContainer}>
                    <FlatList
                        horizontal
                        snapToStart={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.list}
                        data={CATEGORIES}
                        renderItem={renderCategoryItem}
                        keyExtractor={(item, index) => String(index)}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default HomeIndex