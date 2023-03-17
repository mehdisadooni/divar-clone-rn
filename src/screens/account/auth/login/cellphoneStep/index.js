import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput, Pressable, Linking} from "react-native";
import {styles} from "./styles";
import {colors} from "../../../../../utils/colors";
import {request} from "../../../../../utils/request";

const CellphoneStep = ({navigation}) => {
    const [focus, setFocus] = useState(false);
    const customStyle = focus ? styles.textInputFocus : styles.textInput

    const handleLogin = async () => {

        try {
            const response = await request('v1/auth/join/cellphone-step', 'post', {
                cellphone: '09374802160'
            })
            console.log(response.data)
        }catch (error){
            console.log(error)
        }

    }
    return (
        <View style={styles.container}>

            <View style={styles.inputWrapper}>
                <Text style={styles.labelText}>شماره موبایل خود را وارد کنید</Text>
                <Text style={styles.descriptionText}>
                    برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید.
                </Text>
                <Text style={styles.descriptionText}>کد تایید به ای ن شماره ارسال خواهد شد.</Text>
                <TextInput
                    autoFocus
                    style={{...styles.input, ...customStyle}}
                    onFocus={() => setFocus(true)}
                    selectionColor={colors.red}
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
                <TouchableOpacity onPress={handleLogin} activeOpacity={0.9}
                                  style={styles.btn}>
                    <Text style={styles.btnText}>بعدی</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

export default CellphoneStep