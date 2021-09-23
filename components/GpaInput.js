import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const GpaInput = ({ grade, credit, remove }) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.grades}>
                <Text style={styles.grade} > {grade} </Text>
            </View>
            <View style={styles.credits}>
                <Text style={styles.credit}>{credit}</Text>
            </View>
            <View style={styles.remove} onPress={remove}>
                <Text style={styles.cross} >x</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    remove: {
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 30,
        marginTop: 15
    },
    cross: {
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
        paddingTop: 3
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1
    },
    grade: {
        backgroundColor: '#ffffff',
        marginRight: 10,
        width: 130,
        height: 50,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 5
    },
    credit: {
        backgroundColor: '#ffffff',
        marginRight: 10,
        width: 130,
        height: 50,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 25,
        paddingTop: 5
    }
})

export default GpaInput
