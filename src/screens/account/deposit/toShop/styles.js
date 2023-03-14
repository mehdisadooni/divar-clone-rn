import {StyleSheet} from "react-native";
import {colors} from "../../../../utils/colors";
import {fonts} from "../../../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    historyTextContainer: {
        marginVertical: 20,
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: '#c5c3c3'
    },
    historyText: {
        color: colors.darkGray,
        fontFamily: fonts.iranSans,
    },

    emptyDepositContainer: {
        alignItems: 'center'
    },
    emptyDepositContainerText: {
        fontWeight: '300',
        fontSize: 15,
        fontFamily: fonts.iranSans,
    }
})