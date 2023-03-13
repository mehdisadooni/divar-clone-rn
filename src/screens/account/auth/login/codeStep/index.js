import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import {styles} from "./styles";
import {colors} from "../../../../../utils/colors";

const CodeStep = ({navigation}) => {
    const [focus, setFocus] = useState(false);
    const customStyle = focus ? styles.textInputFocus : styles.textInput

    return (
        <View style={styles.container}>

            <View style={styles.inputWrapper}>
                <Text style={styles.labelText}>شماره موبایل خود را وارد کنید</Text>
                <Text style={styles.descriptionText}>
                    برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید.
                </Text>
                <Text style={styles.descriptionText}>کد تایید به ای ن شماره ارسال خواهد شد.</Text>
                <TextInput
                    style={{...styles.input, ...customStyle}}
                    onFocus={() => setFocus(true)}
                    placeholder={'مثال: 0020068900'}
                    keyboardType={'number-pad'}

                />
            </View>

            <View style={styles.btnWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('CodeStep')} activeOpacity={0.9}
                                  style={styles.btn}>
                    <Text style={styles.btnText}>بعدی</Text>
                </TouchableOpacity>
            </View>

        </View>


    )
}

export default CodeStep