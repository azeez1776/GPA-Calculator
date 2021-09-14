import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GpaInput from './components/GpaInput';

export default function App() {

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

  const handleCompute = () => {
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
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>GPA CALCULATOR</Text>
      </View>
      <View style={styles.main}>
        <ScrollView style={{ height: 500 }}>
          {gpa ? <Text style={styles.gpa}>{gpa}</Text> : (
            marksList.map((value, key) => {
              return (
                <TouchableOpacity
                  key={key}
                >
                  <GpaInput grade={value.grade} credit={value.credit} />
                </TouchableOpacity>
              )
            })
          )
          }
        </ScrollView>
      </View>
      <View style={styles.textarea}>
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
          onChangeText={text => setMarks({ ...marks, credit: text })}
        />
      </View>
      <View style={styles.addArea}>
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
  );
}

const styles = StyleSheet.create({
  gpa: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  board: {
    display: 'flex',
  },
  addArea: {
    position: 'absolute',
    top: 730,
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
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
    fontSize: 25,
    display: 'flex',
    alignItems: 'center',
  },
  comp: {
    backgroundColor: '#f72585',
    width: 150,
    height: 50,
    borderRadius: 10,
    paddingTop: 5,
    fontSize: 25,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 50,
    left: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#cddafd',

  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 150,
    left: 40,

  },
  textarea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 35,
    position: 'absolute',
    top: 660,
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
    marginLeft: 10,
    backgroundColor: '#ffffff',
    width: 150,
    height: 50,
    borderRadius: 10,
    fontSize: 25,
    paddingTop: 5,
  }
});
