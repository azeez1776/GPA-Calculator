import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Detail = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <View style={styles.menuList}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Menu</Text>
                </View>
                <TouchableOpacity
                    style={styles.gpaKaluubtn}
                    onPress={() => {
                        navigation.navigate('Kaluu');
                    }}
                >
                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 7, fontSize: 20 }}>GPA Kaluu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.aboutbtn}

                >
                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 7, fontSize: 20 }}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.settingbtn}

                >
                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 7, fontSize: 20 }}>Setting</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gpaKaluubtn: {
        backgroundColor: '#03071e',
        width: 220,
        height: 40,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    aboutbtn: {
        backgroundColor: '#370617',
        width: 220,
        height: 40,
    },
    settingbtn: {
        backgroundColor: '#6a040f',
        width: 220,
        height: 40,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    }
})
