import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

//CHOOSE 5.0 OR 4.0 GPA
const Detail = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='black' style='light' />
            <View style={styles.menu}>
                <View style={styles.menuList}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>GPA Kaluu</Text>
                </View>
                <TouchableOpacity
                    style={styles.gpaKaluubtn}
                    onPress={() => {
                        navigation.navigate('Kaluu5');
                    }}
                >
                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 7, fontSize: 20 }}>GPA 5.0/5.0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.aboutbtn}
                    onPress={() => {
                        navigation.navigate('Kaluu4')
                    }}

                >
                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 7, fontSize: 20 }}>GPA 4.0/4.0</Text>
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
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

    },

})
