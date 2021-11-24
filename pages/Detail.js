import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Detail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity
                    style={styles.gpaKaluubtn}
                >
                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 7, fontSize: 20 }}>GPA Kaluu</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>About</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Setting</Text>
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
        borderRadius: 10
    }
})
