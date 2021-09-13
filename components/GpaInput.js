import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const GpaInput = ({ grade, credit }) => {
    return (
        <View style={styles.wrapper}>
                <View style={styles.grade}>
                    <Text style={styles.grade} > {grade} </Text>
                </View>
                <View style={styles.credit}>
                    <Text style={styles.credit}>{credit}</Text>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15,
        flex:1
    },
    grade: {
        backgroundColor: '#ffffff',
        marginRight: 10,
        width: 150,
        height: 50,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 5
    },
    credit: {
        backgroundColor: '#ffffff',
        marginRight: 10,
        width: 150,
        height: 50,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 5
    }
})

export default GpaInput
