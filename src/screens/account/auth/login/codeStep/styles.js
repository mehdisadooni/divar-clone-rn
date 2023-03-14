import {StyleSheet} from "react-native";
import {colors} from "../../../../../utils/colors";
import {fonts} from "../../../../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f3f3',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
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
        textAlign: 'right',
        height: 50
    },
    textInput: {
        borderColor: '#989797',
    },

    textInputFocus: {
        borderColor: colors.red,
    },

    labelText: {
        fontFamily: fonts.iranSansBold
    },

    descriptionText: {
        fontFamily: fonts.iranSans
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.lightGray,
        paddingBottom: 15,
    },
    countDownWrapper: {
        textAlign: "center",
        alignItems: "center",
        justifyContent:"center",
        flex:1
    },
    countDownText: {
        fontFamily: fonts.iranSans,
        color:colors.gray
    }
})