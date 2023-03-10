import React, {useState} from "react";
import {Text, View, TouchableOpacity, ScrollView, RefreshControl} from "react-native";
import {styles} from "./styles";
import AccountMenu from "../../../components/AccountItem";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {colors} from "../../../utils/colors";

const AccountIndex = () => {

    let user;
    const [refreshing, setRefreshing] = useState(false);

    const handleRefreshing = () => {
        setRefreshing(true)
        setTimeout(() => {
            setRefreshing(false)
        }, 2000)
    }


    return (
        <ScrollView
            style={styles.container}
            refreshControl={<RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefreshing}
                colors={[colors.red]}
            />}
        >
            <View style={styles.authSection}>
                {!user ? (
                    <>
                        <Text style={styles.authSectionText}>
                            شما با شماره 09160886483 وارد شده
                            اید و آگهی های ثبت شده با
                            این شماره را مشاهده می کنید.
                        </Text>
                        <View style={styles.authSectionBtnContainer}>
                            <TouchableOpacity style={styles.authSectionButton}>
                                <Text style={styles.authSectionButtonText}>خروج از حساب</Text>
                            </TouchableOpacity>
                        </View>
                        <AccountMenu
                            style={{marginTop:10}}
                            label="تایید هویت"
                            icon={<FontAwesome name='user' size={20} color={'rgba(38,38,38,0.56)'}/>}
                        />

                    </>
                ) : (
                    <>
                        <Text style={styles.authSectionText}>برای استفاده از تمام امکانات دیوار، وارد حساب
                            خود
                            شوید.</Text>
                        <View style={styles.authSectionBtnContainer}>
                            <TouchableOpacity style={styles.authSectionButton}>
                                <Text style={styles.authSectionButtonText}>ورود به حساب</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}

            </View>

            <View style={styles.section}>
                <AccountMenu
                    label="آگهی های من"
                    icon={<FontAwesome name='user' size={20} color={'rgba(38,38,38,0.56)'}/>}
                />

                <AccountMenu
                    label="پرداخت های من"
                    icon={<FontAwesome name='credit-card' size={20} color={'rgba(38,38,38,0.56)'}/>}
                />

                <AccountMenu
                    label="نشان ها و یاداشت ها"
                    icon={<FontAwesome name='bookmark' size={20} color={'rgba(38,38,38,0.56)'}/>}
                />

                <AccountMenu
                    label="بازدیدهای اخیر"
                    icon={<FontAwesome name='clock-o' size={20} color={'rgba(38,38,38,0.56)'}/>}
                />

                <AccountMenu
                    onPress={() => props.navigation.navigate({routeName: 'IndexSetting'})}
                    label="تنظیمات"
                    icon={<FontAwesome name='gear' size={20} color={'rgba(38,38,38,0.56)'}/>}
                />
            </View>

            <View style={styles.section}>

                <AccountMenu
                    label="امکان بیعانه"
                    icon={<FontAwesome name='newspaper-o' size={20} color={'rgba(38,38,38,0.56)'}/>}
                />
            </View>

            <View style={styles.section}>

                <AccountMenu
                    label="دیوار برای کسب  و کارها"
                    icon={<FontAwesome name='home' size={20} color={'rgba(38,38,38,0.56)'}/>}
                />

                <AccountMenu
                    label="پشتیبانی و قوانین"
                    icon={<FontAwesome name='life-saver' size={20} color={'rgba(38,38,38,0.56)'}/>}
                />

                <AccountMenu
                    label="درباره دیوار"
                    icon={<FontAwesome name='info-circle' size={20} color={'rgba(38,38,38,0.56)'}/>}
                />

            </View>

        </ScrollView>
    )
}

export default AccountIndex