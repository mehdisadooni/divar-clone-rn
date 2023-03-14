import {StyleSheet} from "react-native";
import {colors} from "../../../../utils/colors";
import {fonts} from "../../../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f3f3',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    descriptionTextContainer: {
        paddingHorizontal: 15,
    },
    descriptionText: {
        color: colors.darkGray,
        fontFamily: fonts.iranSans,
    },
    rulesLinkContainer: {
        marginTop: 20
    },
    btn: {
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: colors.red,
        borderRadius: 5,
    },
    btnText: {
        color: '#fff',
        fontFamily: fonts.iranSans,
        fontSize: 15
    }
})