import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Linking } from 'react-native'
import { Icon } from 'react-native-elements'

const Contacts = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', paddingLeft: 12, paddingTop: 12 }}>
                <Icon
                    name="whatsapp"
                    type="font-awesome"
                />
                <Text
                    style={{ fontSize: 23, paddingLeft: 8 }}
                    onPress={() => Linking.openURL('wa.link/e13qow')}
                >Whatsapp: +255621485339</Text>
            </View>
        </SafeAreaView>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
