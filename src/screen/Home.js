import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import CustomInput from '../Components/CustomInput';
// Modal
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width - 40;

const Home = ({ navigation }) => {
  const [shift, setShift] = useState();
  const [operator, setOperator] = useState();
  const [operation, setOperation] = useState();
  const [machine, setMachine] = useState();
  const [instrument, setInstrument] = useState();
  const [isOpen, setIsOpen] = useState(true);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalView, setModalView] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleMod = () => {
    setModalView(!modalView);
  };

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const handelTime = () => {
    setIsStopwatchStart(!isStopwatchStart);
    setResetStopwatch(false);
    if (isStopwatchStart === true) {
      toggleMod();
    }

    // let time = new Date().toLocaleTimeString();
    // setDate(time);
  };

  const handleResume = () => {
    let time = new Date().toLocaleTimeString();
    setRdate(time);
    setTimeout(function () {
      setIsOpen(!isOpen);
    }, 3000);
  };

  const handleEnd = () => {
    let time = new Date().toLocaleTimeString();
    setEdate(time);
  };

  const handleModel = () => {
    alert('Thankyou!, Your response have been submitted!');
    toggleMod();
  };


  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.Hrow}>
        <Image
          source={require('../assets/images/alder_logo.png')}
          style={styles.logo}
        />
        <Stopwatch
          laps
          msecs={false}
          start={isStopwatchStart}
          // To start
          reset={resetStopwatch}
          // To reset
          options={options}
          // Options for the styling
          getTime={time => {
            console.log(time);
          }}
        />
      </View>

      <Text style={styles.label}>Operator Number:</Text>
      <View style={styles.input}>
        <Picker
          ref={pickerRef}
          selectedValue={operator}
          onValueChange={(itemValue, itemIndex) => setOperator(itemValue)}>
          <Picker.Item style={styles.label} label="007" value="007" />
          <Picker.Item style={styles.label} label="006" value="006" />
          <Picker.Item style={styles.label} label="008" value="008" />
        </Picker>
      </View>
      <Text style={styles.label}>Shift:</Text>
      <View style={styles.input}>
        <Picker
          ref={pickerRef}
          selectedValue={shift}
          onValueChange={(itemValue, itemIndex) => setShift(itemValue)}>
          <Picker.Item style={styles.label} label="Day" value="day" />
          <Picker.Item style={styles.label} label="Night" value="night" />
        </Picker>
      </View>
      <Text style={styles.label}>Operation Number:</Text>
      <View style={styles.input}>
        <Picker
          ref={pickerRef}
          selectedValue={operation}
          onValueChange={(itemValue, itemIndex) => setOperation(itemValue)}>
          <Picker.Item style={styles.label} label="01A" value="01A" />
          <Picker.Item style={styles.label} label="01C" value="01C" />
          <Picker.Item style={styles.label} label="01S" value="01S" />
        </Picker>
      </View>
      <Text style={styles.label}>Machine Number:</Text>
      <View style={styles.input}>
        <Picker
          ref={pickerRef}
          selectedValue={machine}
          onValueChange={(itemValue, itemIndex) => setMachine(itemValue)}>
          <Picker.Item style={styles.label} label="SHT-1" value="SHT-1" />
          <Picker.Item style={styles.label} label="MNS-2" value="MNS-2" />
          <Picker.Item style={styles.label} label="ATS-1" value="ATS-1" />
        </Picker>
      </View>
      <Text style={styles.label}>Measuring Inst. No:</Text>
      <View style={styles.input}>
        <Picker
          ref={pickerRef}
          selectedValue={instrument}
          onValueChange={(itemValue, itemIndex) => setInstrument(itemValue)}>
          <Picker.Item style={styles.label} label="14135760" value="14135760" />
          <Picker.Item style={styles.label} label="63051076" value="63051076" />
          <Picker.Item style={styles.label} label="DDG14068" value="DDG14068" />
        </Picker>
      </View>
      <TouchableOpacity
        style={[
          styles.submit_btn,
          styles.start_btn,
          { backgroundColor: !isStopwatchStart ? 'green' : 'red' },
        ]}
        onPress={() => {
          handelTime();
        }}>
        <Text style={styles.submit_txt}>
          {!isStopwatchStart ? 'START Work' : 'PAUSE'}
        </Text>
      </TouchableOpacity>

      <View>
        <Text style={styles.label}>Remaining</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          width: '100%',
          borderWidth: 1,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
          <TextInput style={{
            padding: 3,
            backgroundColor: '#fff',
            alignContent: 'center',
          }}>
            <Text style={{ fontSize: 25 }}> {count2}</Text>
          </TextInput >
        </View>
      </View>
      <View>
        <Text style={styles.label}>Accepted</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          width: '100%',
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'space-between',
        }}>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: '#000', borderTopLeftRadius: 9, borderBottomLeftRadius: 9 }}
            onPress={() => setCount(count - 1)}>
            <Icon name="minuscircleo" size={20} color='#fff' />
          </TouchableOpacity>
          <TextInput style={{
            padding: 0,
            backgroundColor: '#fff',
            alignContent: 'center',
            // paddingLeft: 20,
          }}>
            <Text style={{ fontSize: 25 }}> {count}</Text>
          </TextInput >
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: '#000', borderTopRightRadius: 9, borderBottomRightRadius: 9 }}
            onPress={() => setCount(count + 1)}>
            <Icon name="pluscircleo" size={20} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.label}>Rejected</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#fff',
          width: '100%',
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'space-between',
          marginBottom: 10,
        }}>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: '#000', borderTopLeftRadius: 9, borderBottomLeftRadius: 9 }}
            onPress={() => setCount1(count1 - 1)}>
            <Icon name="minuscircleo" size={20} color='#fff' />
          </TouchableOpacity>
          <TextInput style={{
            padding: 0,
            backgroundColor: '#fff',
            alignContent: 'center',
            // paddingLeft: 20,
          }}>
            <Text style={{ fontSize: 25 }}> {count1}</Text>
          </TextInput >
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: '#000', borderTopRightRadius: 9, borderBottomRightRadius: 9 }}
            onPress={() => setCount1(count1 + 1)}>
            <Icon name="pluscircleo" size={20} color='#fff' />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.submit_btn,
            { backgroundColor: '#ff9900', },
          ]}
          onPress={() => navigation.navigate('ProcessSheet')}>
          <Text style={styles.submit_txt}>Process Sheet</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={[
            styles.submit_btn,
            { backgroundColor: '#ff9900', },
          ]}
          onPress={() => navigation.navigate('Machine')}>
          <Text style={styles.submit_txt}>Machinary Details</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Modal isVisible={modalView}>
          <View style={styles.modal_out}>
            {/* <TouchableOpacity
              // style={styles.submit_btn}
              onPress={toggleMod}
            >
              <Image
                source={require('../assets/icons/270-cancel-circle.png')}
                resizeMode='contain'
                style={styles.close}
              />
            </TouchableOpacity> */}
            <View style={styles.modal_view}>

              <Text style={styles.label}>Reason for Pause</Text>
              <CustomInput
                placeholder="Reason for delay in work"
                name={'ReasonForPause'}
              />
              <TouchableOpacity
                style={styles.submit_btn}
                onPress={handleModel}
              >
                <Text style={styles.submit_txt}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View >

      <View>
        <TouchableOpacity
          style={styles.submit_btn}
          onPress={toggleModal}
        >
          <Text style={styles.submit_txt}>Submit work</Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modal_out}>
            <TouchableOpacity
              // style={styles.submit_btn}
              onPress={toggleModal}
            >
              <Image
                source={require('../assets/icons/270-cancel-circle.png')}
                resizeMode='contain'
                style={styles.close}
              />
            </TouchableOpacity>
            <View style={styles.modal_view}>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Working Hours :</Text>
                <Text style={styles.descriptionRight}>12 Hrs</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Hours Delay :</Text>
                <Text style={styles.descriptionRight}>12 Hrs</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Logged In :</Text>
                <Text style={styles.descriptionRight}>7 AM</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Shift :</Text>
                <Text style={styles.descriptionRight}>Night</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Operation Number:</Text>
                <Text style={styles.descriptionRight}>01A</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Machine Number:</Text>
                <Text style={styles.descriptionRight}>SHT-1</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Measuring Instrument:</Text>
                <Text style={styles.descriptionRight}>14135760</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Remaining :</Text>
                <Text style={styles.descriptionRight}>9</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Accepted :</Text>
                <Text style={styles.descriptionRight}>3</Text>
              </View>
              <View style={styles.bodyContent}>
                <Text style={styles.description}>Rejected :</Text>
                <Text style={styles.descriptionRight}>1</Text>
              </View>
              <TouchableOpacity
                style={styles.submit_btn}
                onPress={() => { alert('Sucessfully Submitted!!') }}
              >
                <Text style={styles.submit_txt}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View >
    </ScrollView >

  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 2,
    borderRadius: 6,
    fontSize: 15,
    borderColor: '#f0f0f5',
    paddingLeft: 15,
  },
  label: {
    color: 'black',
    fontSize: 15,
    marginBottom: 5,
  },
  logo: {
    margin: 15,
    width: 45,
    height: 45,
  },
  btn: {
    height: 30,
    width: '30%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 10,
    backgroundColor: '#06489c',
  },
  article: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn_txt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  btn_input: {
    backgroundColor: '#f2f2f2',
    width: '60%',
    marginLeft: 15,
    marginBottom: 10,
    color: 'black',
    textAlign: 'center',
  },
  submit: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  submit_btn: {
    backgroundColor: '#06489c',
    borderRadius: 5,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginVertical: 10,
  },
  submit_txt: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
  },
  start_btn: {
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15,
    backgroundColor: 'green',
  },
  Hrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // container: {
  //   paddingHorizontal: '5%',
  // },
  modal_out: {
    backgroundColor: '#fff',
    width: windowWidth,
    justifyContent: 'center',
  },
  modal_view: {
    justifyContent: 'center',
    padding: "7%",
    paddingTop: 40,
  },
  modal_txt: {
    backgroundColor: 'red',
  },
  close: {
    marginTop: 10,
    marginRight: 10,
    alignSelf: 'flex-end',
    width: 25,
    height: 25,
    tintColor: '#b30000',
  },
  bodyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: '85%',
    paddingLeft: 10,
  },
  description: {
    color: '#000',
    width: "50%",
    fontSize: 17,
  },
});

const options = {
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: '#06489c',
    margin: 10,
    fontWeight: 'bold',
  },
};
