import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles";
import AccountMenu from "../../../../components/AccountItem";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {colors} from "../../../../utils/colors";

const ForSale = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={{...styles.descriptionTextContainer, marginTop: 15}}>
                    <Text style={styles.descriptionText}>
                        با استفاده از امکان بیعانه، خریدار می‌تواند بعد از ارسال پیشنهاد بیعانه و تأیید فروشنده، از طریق
                        سامانه‌های امن پرداختی مبلغ بیعانه را بپردازد. این مبلغ به‌مدت ۴۸ ساعت در حساب سامانهٔ امن
                        پرداختی
                        به‌امانت می‌ماند تا خریدار وضعیت آن را مشخص کند.
                        در صورت بروز مشکل می‌توانید پیشنهاد بیعانه را لغو یا آن را گزارش کنید تا پشتیبانی سامانهٔ امن
                        پرداختی
                        مشکل را بررسی و پیگیری کند.

                    </Text>
                    <Text style={{...styles.descriptionText, marginBottom: 15}}>
                        همچنین برای اطمینان از امنیت معامله، دو طرف (خریدار و فروشنده) ملزم به تأیید کردن هویت خود
                        هستند.
                    </Text>
                    <Text style={styles.descriptionText}>
                        فعال کردن امکان بیعانه در ۲ مرحله انجام می‌شود:
                    </Text>
                    <Text style={styles.descriptionText}>
                        ۱. مطالعه و تأیید قوانین دیوار و شرکت همکار
                    </Text>
                    <Text style={styles.descriptionText}>
                        ۲. تکمیل اطلاعات هویتی
                    </Text>


                </View>

                <View style={styles.rulesLinkContainer}>
                    <AccountMenu
                        label="پرداخت های من"
                        icon={<FontAwesome name='info-circle' size={20} color={'rgba(38,38,38,0.56)'}/>}
                    />
                </View>

            </View>

            <View style={{padding: 8, backgroundColor: colors.lightGray}}>
                <TouchableOpacity activeOpacity={0.9} style={styles.btn}>
                    <Text style={styles.btnText}>ثبت</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

export default ForSale