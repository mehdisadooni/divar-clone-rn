import {View, TextInput, Pressable} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {colors} from "../../../../utils/colors";

const SearchModal = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.searchBox}>
                    <Pressable onPress={() => navigation.goBack()} >
                        <FontAwesome name='arrow-right' size={20} color={colors.gray}/>
                    </Pressable>
                <TextInput
                    autoFocus
                    style={styles.input}
                    cursorColor={colors.red}
                />
            </View>
        </SafeAreaView>
    )
}

export default SearchModal