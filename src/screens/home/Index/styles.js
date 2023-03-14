import {StyleSheet} from "react-native";
import {colors} from "../../../utils/colors";
import {fonts} from "../../../utils/fonts";

export const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#eae9e9',
    },
    searchContainer: {
        borderRadius:4,
        borderColor:'#cccccc',
        borderWidth:1,
        backgroundColor: '#fff',
        height: 40,
        paddingHorizontal:10,
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '97%',
        alignSelf: 'center'
    },
    placeholder: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    placeholderText: {
        color:colors.gray,
        fontFamily:fonts.iranSans,
        paddingRight:5,

    },
    locationText: {
        fontFamily:fonts.iranSans,
        marginRight:7
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    verticalLine: {
        borderLeftWidth: 1,
        borderLeftColor: '#cccccc',
        height: '50%',
        paddingLeft:15,
        alignSelf: 'center',
    },
    categoriesContainer: {
        marginTop:10
    },
})