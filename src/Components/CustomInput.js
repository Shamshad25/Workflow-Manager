import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
// import Entypo from 'react-native-vector-icons/Entypo';

const CustomInput = props => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChangeText={props.onChangeHandler}
        secureTextEntry={props.secure}
      />
      {/* {props.placeholder == 'Password' && <Entypo name='eye' size={23} color='grey' />} */}
      <Text style={styles.error}>{props.errorText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 2,
    borderRadius: 6,
    fontSize: 15,
    borderColor: '#f0f0f5',
    paddingLeft: 15,
  },
  error: {
    color: 'red',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 15,
  },
});

export default CustomInput;
