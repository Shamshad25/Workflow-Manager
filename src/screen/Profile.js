import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

const Profile = ({ navigation }) => {
  const navigator = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.header}>
            <View style={styles.article}>
              <Image
                source={require('../assets/images/alder_logo.png')}
                style={styles.logo}
              />
              <TouchableOpacity
                style={styles.logout}
                onPress={() => {
                  navigator.push('Login');
                }}>
                <Text style={styles.logout_txt}>
                  <Image
                    style={{ tintColor: 'red', marginRight: 3 }}
                    source={require('../assets/icons/183-switch.png')}
                  />
                  Log Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.user}>
            <Image
              style={styles.avatar}
              source={require('../assets/images/profile.jpg')}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.name}>John Smith</Text>
            <View style={styles.bodyContent}>
              <Text style={styles.description}>Operator No. :</Text>
              <Text style={styles.description}>007</Text>
            </View>
            <View style={styles.bodyContent}>
              <Text style={styles.description}>Joining Date :</Text>
              <Text style={styles.description}>25th July 2012</Text>
            </View>
            <View style={styles.bodyContent}>
              <Text style={styles.description}>Address :</Text>
              <Text style={styles.description}>123 Main Street, New York, NY 10030</Text>
            </View>
            <View style={styles.bodyContent}>
              <Text style={styles.description}>Working Hours :</Text>
              <Text style={styles.description}>12 Hours</Text>
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
              <Text style={styles.description}>Measuring Inst.:</Text>
              <Text style={styles.descriptionRight}>14135760</Text>
            </View>
          </View>
          <View style={styles.section}>
            <TouchableOpacity
              style={styles.submit_btn}
              onPress={() => navigation.navigate('Calender')}
            >
              <Text style={styles.submit_txt}>Previous works</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  article: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    margin: 10,
    width: 45,
    height: 45,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    alignSelf: 'center',
  },
  user: {
    marginBottom: 10,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  bodyContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '85%',
    paddingLeft: 10,
  },
  name: {
    fontSize: 28,
    color: 'black',
    paddingBottom: 10,
  },
  description: {
    color: '#000',
    width: "50%",
    fontSize: 17,
  },
  descriptionRight: {
    color: '#000',
    width: "50%",
    fontSize: 17,
  },
  section: {
    justifyContent: 'center',
    width: '90%',
    marginLeft: 20,
  },
  logout: {
    width: "22%",
    margin: 15,
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: 'red',
  },
  logout_txt: {
    left: 5,
    color: 'red',
  },
  submit_btn: {
    backgroundColor: 'green',
    borderRadius: 5,
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
    marginTop: 10,
  },
  submit_txt: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
