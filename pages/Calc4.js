import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import GpaInput from '../components/GpaInput';
import { Picker } from '@react-native-picker/picker';




export default function Calc({ navigation, route }) {

    const [marks, setMarks] = useState({
        grade: '',
        credit: ''
    });

    const [marksList, setMarksList] = useState([]);
    const [gradeModal, setGradeModal] = useState(false);

    const [gpa, setGpa] = useState(null);
    const [grade, setGrade] = useState();
    // const [gpaDecl, setGpaDecl] = useState('');


    const handlePress = () => {
        // Keyboard.dismiss();
        if (marks.grade === '' || marks.credit === '') {
            return Alert.alert('', 'Add after every grade and credit inputted for every course, then finally compute for the GPA', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        else {
            setMarksList([...marksList, marks]);
            setMarks({
                grade: '',
                credit: ''
            });
        }
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
        if (marksList === false) {
            return Alert.alert('', 'Can not Compute untill course grade and credit is added first.', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        else {
            Keyboard.dismiss();
            let totalCredit = 0;
            let totalGradeCredit = 0;
            for (let i = 0; i < marksList.length; i++) {
                totalCredit += parseInt(marksList[i].credit);
            };
            // return console.log(sum);
            for (let j = 0; j < marksList.length; j++) {
                if (marksList[j].grade === 'A') marksList[j].grade = 4;
                else if (marksList[j].grade === 'B') marksList[j].grade = 3;
                else if (marksList[j].grade === 'C') marksList[j].grade = 2;
                else marksList[j].grade = 0;
                totalGradeCredit += marksList[j].grade * marksList[j].credit;
            }
            setGpa(Math.round((totalGradeCredit / totalCredit) * 10) / 10);
        }
    }

    const gpaClass = (value) => {
        if (value >= 3.5) {
            return 'First Class'
        }
        else if (value >= 3.0) {
            return 'Second Class'
        }
        else if (value >= 2.0) {
            return 'Pass'
        }
        else {
            return 'Consult your Lecturers, it isn\'t the end'
        }

    }



    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={gpa ? { display: 'none' } : { flex: 1 }}>
                    <View style={styles.operations}>
                        <View style={{ alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Calculate Your GPA</Text>
                        </View>
                        <View style={styles.partOne}>
                            <TouchableOpacity
                                style={styles.gradearea}
                                onPress={() => setGradeModal(true)}

                            >
                                <Text style={marks.grade ? { textAlign: 'center', paddingTop: 10, fontSize: 24, color: '#000000' } : { textAlign: 'center', paddingTop: 10, fontSize: 24, color: 'grey' }}>
                                    {marks.grade || 'Enter Grade'}
                                </Text>
                            </TouchableOpacity>
                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={gradeModal}
                                onRequestClose={() => {
                                    setGradeModal(!gradeModal);
                                }}>
                                <View
                                    style={styles.modal}

                                >
                                    <View style={styles.picker}>
                                        <Picker
                                            style={{ height: 50, width: '100%' }}
                                            selectedValue={marks.grade}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setMarks({ ...marks, grade: itemValue })
                                                setGradeModal(!gradeModal)
                                            }
                                            }>
                                            <Picker.Item label="Enter Grade" value="" />
                                            <Picker.Item label="A" value="A" />
                                            <Picker.Item label="B" value="B" />
                                            <Picker.Item label="C" value="C" />
                                            {/* <Picker.Item label="D" value="D" />
                                            <Picker.Item label="E" value="E" />
                                            <Picker.Item label="F" value="F" /> */}

                                        </Picker>
                                    </View>

                                </View>

                            </Modal>

                            <TextInput
                                style={styles.creditarea}
                                placeholder={" Enter Credit"}
                                value={marks.credit ? marks.credit : null}
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{gpaClass(gpa)}</Text>
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
                                    onPress={() => handleRemove(index)}
                                >
                                    <GpaInput style={styles.gpaIn} grade={value.grade} credit={value.credit} />
                                </TouchableOpacity>

                            )
                        }

                        )}
                    </ScrollView>
                )
                }

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    picker: {
        backgroundColor: '#eff6ee',
        height: '40%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flex: 1,
        alignContent: 'center',
        paddingLeft: '40%'
    },
    modal: {
        flex: 1,
    },
    result: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    operations: {
        flex: 1,
        marginTop: 15,
        zIndex: 2,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        padding: 0,
        height: '10%'
    },
    partOne: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 10,
        marginBottom: 10,
        justifyContent: 'space-around',
        width: '100%',

    },
    partTwo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    back: {
        backgroundColor: '#370617',
        width: 100,
        height: 50,
        borderRadius: 10,
        paddingTop: 10,
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
        backgroundColor: '#370617',
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
        backgroundColor: '#ffffff',
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
        backgroundColor: '#eff6ee',
        width: 150,
        height: 50,
        borderRadius: 10,
        fontSize: 25,
        paddingTop: 5,
        textAlign: 'center'

    },
    creditarea: {
        backgroundColor: '#eff6ee',
        width: 150,
        height: 50,
        borderRadius: 10,
        fontSize: 25,
        paddingTop: 5,
        textAlign: 'center'
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
    flow: {
        margin: 5
    }
});
