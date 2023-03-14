import {StyleSheet} from "react-native";
import {colors} from "../../utils/colors";
import {fonts} from "../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        paddingVertical:8,
        marginHorizontal: 8,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        color: colors.gray,
        fontFamily:fonts.iranSans
    },
    image: {
        width: 32,
        height: 32,
    },
    imageContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 50,
        borderColor:'#cccccc',
        borderWidth:1
    },
})