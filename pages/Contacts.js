import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Linking } from 'react-native'

const Contacts = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={{}}
                onPress={() => Linking.openURL('wa.link/e13qow')}
            >Whatsapp: +255621485339</Text>
        </SafeAreaView>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
