import { StyleSheet, Text, View, TouchableOpacity, PermissionsAndroid, Alert } from 'react-native';
import React from 'react';
import RNFetchBlob from 'rn-fetch-blob';


const Machine = () => {

    const actualDownload = () => {
        const { dirs } = RNFetchBlob.fs;
        RNFetchBlob.config({
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                mediaScannable: true,
                title: `test.pdf`,
                path: `${dirs.DownloadDir}/test.pdf`,
            },
        })
            .fetch('GET', 'http://www.africau.edu/images/default/sample.pdf', {})
            .then((res) => {
                console.log('The file saved to ', res.path());
            })
            .catch((e) => {
                console.log(e)
            });
    }

    const downloadFile = () => {
        try {
            const granted = PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                actualDownload();
            } else {
                Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{
                fontSize: 25,
                color: 'black',
                borderBottomWidth: 1,
                paddingBottom: 10,
                alignSelf: 'center',
                paddingTop: 10
            }}>Download Machinary Details Here.</Text>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }} >
                <TouchableOpacity onPress={() => {
                    downloadFile();
                }}
                    style={{
                        width: '90%',
                        height: (50),
                        backgroundColor: 'green',
                        elevation: (8),
                        borderRadius: (25),
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: (16),
                        }}>
                        Download Data
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Machine

    // const styles = StyleSheet.create({});