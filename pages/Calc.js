import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GpaInput from '../components/GpaInput';


export default function Calc({ navigation, route }) {

    const [marks, setMarks] = useState({
        grade: '',
        credit: ''
    });

    const [marksList, setMarksList] = useState([]);

    const [gpa, setGpa] = useState(null);


    const handlePress = () => {
        // Keyboard.dismiss();
        setMarksList([...marksList, marks]);
        setMarks({
            grade: '',
            credit: ''
        });
    }

    const handleRemove = (index) => {
        let marksListed = [...marksList];
        marksListed.splice(index, 1);
        setMarksList(marksListed);

    }

    const handleBack = () => {
        setGpa(null);
        setMarksList([])
    }

    const handleCompute = () => {
        Keyboard.dismiss();
        let totalCredit = 0;
        let totalGradeCredit = 0;
        for (let i = 0; i < marksList.length; i++) {
            totalCredit += parseInt(marksList[i].credit);
        };
        // return console.log(sum);
        for (let j = 0; j < marksList.length; j++) {
            if (marksList[j].grade === 'A') marksList[j].grade = 5;
            else if (marksList[j].grade === 'B+') marksList[j].grade = 4;
            else if (marksList[j].grade === 'B') marksList[j].grade = 3;
            else if (marksList[j].grade === 'C') marksList[j].grade = 2;
            else if (marksList[j].grade === 'D') marksList[j].grade = 1;
            else marksList[j].grade = 0;
            totalGradeCredit += marksList[j].grade * marksList[j].credit;
        }
        setGpa(Math.round((totalGradeCredit / totalCredit) * 10) / 10);
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={gpa ? { display: 'none' } : { flex: 1 }}>
                    <View style={styles.operations}>
                        <View style={styles.partOne}>
                            <TextInput
                                style={styles.gradearea}
                                placeholder={" Enter Grade"}
                                value={marks.grade}
                                onChangeText={text => setMarks({ ...marks, grade: text })}
                            />
                            <TextInput
                                style={styles.creditarea}
                                placeholder={" Enter Credit"}
                                value={marks.credit}
                                keyboardType="numeric"
                                onChangeText={text => setMarks({ ...marks, credit: text })}
                            />
                        </View>
                        <View style={styles.partTwo}>
                            <TouchableOpacity
                                onPress={handlePress}
                            >
                                <View style={styles.add}>
                                    <Text style={styles.addtext}>
                                        Add
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleCompute}
                            >
                                <View style={styles.comp}>
                                    <Text style={styles.comptext}>
                                        Compute
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {gpa ? (
                    <View style={styles.result}>

                        <Text style={styles.gpa}>{gpa}</Text>
                        <TouchableOpacity
                            onPress={handleBack}
                        >
                            <View style={styles.back}>
                                <Text style={styles.backtext}>
                                    Back
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                ) : (
                    <ScrollView style={{ height: 50, zIndex: 1 }}>
                        {marksList.map((value, index) => {
                            return (
                                <TouchableOpacity
                                    style={styles.flow}
                                    key={index}
                                    onPress={handleRemove}
                                >
                                    <GpaInput style={styles.gpaIn} grade={value.grade} credit={value.credit} />
                                </TouchableOpacity>

                            )
                        })}
                    </ScrollView>
                )
                }

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    result: {
        flex: 1,
        justifyContent: 'center'
    },
    partOne: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
        marginBottom: 10,
        justifyContent: 'space-around',
        width: '100%'
    },
    partTwo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    back: {
        backgroundColor: '#590d22',
        width: 100,
        height: 50,
        borderRadius: 10,
        paddingTop: 10,
        display: 'flex',
        alignItems: 'center',
    },
    backtext: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
    },

    gpa: {
        fontWeight: 'bold',
        fontSize: 100,
        width: '100%',
        height: '100%',
        padding: 100
    },
    addArea: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flex: 1,
    },
    addtext: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 25,
    },
    comptext: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 25,
    },
    add: {
        backgroundColor: '#03071e',
        width: 150,
        height: 50,
        borderRadius: 10,
        paddingTop: 5,
        // display: 'flex',
        // alignItems: 'center',
    },
    comp: {
        backgroundColor: '#f72585',
        width: 150,
        height: 50,
        borderRadius: 10,
        paddingTop: 5,
        fontSize: 25,
        // display: 'flex',
        // alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#cddafd',
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1


    },
    textarea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        width: '100%',
        flex: 1,
    },

    gradearea: {
        backgroundColor: '#ffffff',
        width: 150,
        height: 50,
        borderRadius: 10,
        fontSize: 25,
        paddingTop: 5,

    },
    creditarea: {
        backgroundColor: '#ffffff',
        width: 150,
        height: 50,
        borderRadius: 10,
        fontSize: 25,
        paddingTop: 5,
    },
    titleWrapper: {
        backgroundColor: '#03071e',
        margin: 0,
        padding: 0,
        paddingBottom: 60,
        marginBottom: 20,
        flexDirection: 'row',
        flex: 0.3,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',


    },
    title: {
        color: 'white',
        margin: 0,
        paddingTop: 30,
        paddingLeft: 20,
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold'

    },
    operations: {
        flex: 1,
        marginTop: 15,
        zIndex: 2,
        backgroundColor: '#cddafd',
        justifyContent: 'center'
    },
    flow: {
        margin: 5
    }
});
