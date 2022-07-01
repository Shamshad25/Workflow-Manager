import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CustomInput from '../Components/CustomInput';

const ProcessSheet = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Image
                    source={require('../assets/images/alder_logo.png')}
                    style={styles.logo}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>Operation Details</Text>
                    <View style={{ width: '90%' }}>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 5, color: '#000' }}>Instrument:</Text>
                        <CustomInput
                            placeholder='Instrument Name'
                        />
                        <Text style={{ fontWeight: 'bold', paddingBottom: 5, color: '#000' }}>Visual:</Text>
                        <CustomInput
                            placeholder='Visual'
                        />
                        <View>
                            <Text style={{ fontWeight: 'bold', paddingBottom: 5, color: '#000' }}>DIMENTIONS:</Text>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', paddingBottom: 20, color: '#000' }}>D1:</Text>
                                <View style={{ width: '80%' }}>
                                    <CustomInput />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', paddingBottom: 20, color: '#000' }}>D2:</Text>
                                <View style={{ width: '80%' }}>
                                    <CustomInput />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', paddingBottom: 20, color: '#000' }}>D3:</Text>
                                <View style={{ width: '80%' }}>
                                    <CustomInput />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', paddingBottom: 20, color: '#000' }}>D4:</Text>
                                <View style={{ width: '80%' }}>
                                    <CustomInput />
                                </View>
                            </View>
                        </View>
                        <Text style={{ fontWeight: 'bold', paddingBottom: 5, color: '#000' }}>Required:</Text>
                        <CustomInput
                            placeholder='Required'
                        />
                        <Text style={{ fontWeight: 'bold', paddingBottom: 5, color: '#000' }}>Acceptence Norm:</Text>
                        <CustomInput
                            placeholder='Acceptence Norm'
                        />
                        <Text style={{ fontWeight: 'bold', paddingBottom: 5, color: '#000' }}>Frequency Of Check:</Text>
                        <CustomInput
                            placeholder='Frequency of check'
                        />

                        <TouchableOpacity
                            style={styles.submit_btn}
                            onPress={() => { alert('Sucessfully Submitted!!') }}
                        >
                            <Text style={styles.submit_txt}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProcessSheet

const styles = StyleSheet.create({
    logo: {
        margin: 15,
        width: 45,
        height: 45,
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
})