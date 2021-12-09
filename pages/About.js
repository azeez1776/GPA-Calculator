import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const About = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.partOne}>
                <Text style={{ fontSize: 27, fontWeight: 'bold', paddingLeft: 12 }}>About</Text>
                <Text style={{ fontSize: 23, paddingLeft: 8 }}>This is an app that calculates GPA based on the grades and credit entered by the user. It is a very simple to use GPA calculator.</Text>
            </View>
            <View style={styles.partTwo}>
                <Text style={{ fontSize: 27, fontWeight: 'bold', paddingLeft: 12 }}>Grading Scale</Text>
                <Text style={{ fontSize: 23, paddingLeft: 8 }}>A = 5</Text>
            </View>

        </SafeAreaView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'space-between'
    }
})
