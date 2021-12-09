import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Linking } from 'react-native'
import { Icon } from 'react-native-elements'

const Contacts = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', paddingLeft: 12 }}>
                <Icon
                    name="whatsapp"
                    type="font-awesome"
                    size={35}
                />
                <Text
                    style={{ fontSize: 23, paddingLeft: 8 }}
                >Whatsapp: +255621485339</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingLeft: 12, paddingTop: 12 }}>
                <Icon
                    name="github"
                    type="font-awesome"
                    size={35}
                />
                <Text
                    style={{ fontSize: 23, paddingLeft: 8 }}
                >Github: Samatar Abdi</Text>
            </View>
        </SafeAreaView>
    )
}

export default Contacts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})
