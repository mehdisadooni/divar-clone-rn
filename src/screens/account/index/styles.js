import {StyleSheet} from "react-native";
import {colors} from "../../../utils/colors";
import {fonts} from "../../../utils/fonts";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#dedcdc',
    },

    authSection: {
        marginBottom: 10,
        backgroundColor:'#fff'
    },
    authSectionText:{
      fontFamily:fonts.iranSans,
        paddingHorizontal: 13,
    },

    section: {
        backgroundColor: '#fff',
        marginBottom: 10,
    },

    authSectionBtnContainer: {
        alignItems: 'flex-end',
    },
    authSectionButton: {
        marginTop: 25,
        // elevation: 8,
        backgroundColor: "#ffff",
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(197,196,196,0.56)',
        paddingVertical: 7,
        paddingHorizontal: 12,
        shadowColor: '#fff'
    },
    authSectionButtonText: {
        fontSize: 10,
        color: 'rgba(51,50,50,0.56)',
        fontWeight: "bold",
        alignSelf: "center",
        // textTransform: "uppercase"
        shadowOpacity: 0,
        fontFamily:fonts.iranSans
    },
})