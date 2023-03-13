import {StyleSheet} from "react-native";
import {colors} from "../../../../../utils/colors";
import {fonts} from "../../../../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f3f3',
        paddingHorizontal: 10,
    },


    inputWrapper: {
        marginTop: 20,
    },
    input: {
        marginTop: 20,
        borderWidth: 1,
        padding: 0,
        paddingHorizontal: 10,
        borderRadius: 5,
        textAlign: 'left',
        height: 50
    },
    textInput: {
        borderColor: '#989797',
    },

    textInputFocus: {
        borderColor: colors.red,
    },

    labelText: {
        fontFamily: fonts.iranSansBold,
        fontSize: 20,
        marginBottom:15
    },

    descriptionText: {
        fontFamily: fonts.iranSans,
        color:colors.gray
    },

    btn: {
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: colors.red,
        borderRadius: 5,
        width: '50%',
    },
    btnText: {
        color: '#fff',
        fontFamily: fonts.iranSans,
        fontSize: 15
    },

    btnWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: colors.lightGray,
        paddingBottom: 15,
        alignItems: 'flex-end',

    }

})