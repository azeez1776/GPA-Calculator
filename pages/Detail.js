import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Detail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <TouchableOpacity>
                    <Text>GPA Kaluu</Text>
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
    }
})
