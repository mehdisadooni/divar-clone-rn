import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput, Pressable, Linking} from "react-native";
import {styles} from "./styles";
import {colors} from "../../../../../utils/colors";

const CodeStep = ({navigation}) => {
    const [focus, setFocus] = useState(false);
    const customStyle = focus ? styles.textInputFocus : styles.textInput

    return (
        <View style={styles.container}>

            <View style={styles.inputWrapper}>
                <Text style={styles.labelText}>تایید را وارد کنید</Text>
                <Text style={styles.descriptionText}>
                    لطفا کد تایید را که به شماره 091608864 پیامک شده وارد کنید.
                </Text>
                <TextInput
                    autoFocus
                    style={{...styles.input, ...customStyle}}
                    onFocus={() => setFocus(true)}
                    keyboardType={'number-pad'}

                />
                <Text style={{...styles.descriptionText, marginTop: 20, alignItems: 'center'}}>

                    <Pressable style={{alignItems: 'center'}}
                               onPress={() => Linking.openURL('https://support.divar.ir/b/support-users/fa/kb/articles/article-105')}>
                        <Text style={{color: colors.red}}>شرایط و قوانین استفاده</Text>
                    </Pressable>
                    و
                    <Pressable
                        onPress={() => Linking.openURL('https://support.divar.ir/b/support-users/fa/kb/articles/article-37')}>
                        <Text style={{color: colors.red}}>سیاست نامه ی حریم خصوصی</Text>
                    </Pressable>
                    دیوار را می پذیرم.

                </Text>
            </View>

            <View style={styles.btnWrapper}>
                <View style={styles.countDownWrapper}>
                    <Text style={styles.countDownText}>درخواست مجدد (00:28)</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('CodeStep')} activeOpacity={0.9}
                                  style={styles.btn}>
                    <Text style={styles.btnText}>ورود</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

export default CodeStep