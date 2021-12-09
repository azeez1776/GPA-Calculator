import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const About = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 27, fontWeight: 'bold', paddingLeft: 10 }}>About</Text>
        </SafeAreaView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
