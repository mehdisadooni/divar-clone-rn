import React from "react";
import {View, Text} from "react-native";
import {styles} from "./styles";

const ToShop = () => {
    return (
        <View style={styles.container}>
            <View style={styles.historyTextContainer}>
                <Text style={styles.historyText}>تاریخچه ی بیعانه فقطا تا 30 روز نمایش داده می شود.</Text>
            </View>
            <View style={styles.emptyDepositContainer}>
                <Text style={styles.emptyDepositContainerText}>هنوز پیشنهاد بیعانه ارسال نکرده اید.</Text>
            </View>
        </View>
    )
}

export default ToShop