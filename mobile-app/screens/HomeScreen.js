import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { Accordion, InputItem, Button, WingBlank, DatePicker, List, Provider, Radio, WhiteSpace, Stepper } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.clear = this.clear.bind(this)
    this.state = {
      isEmailValid: false,
      isPhoneValid: false,
      fullname: '',
      birthday: '',
      phone: '',
      email: '',
    };
  }

  verifyEmail(email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.exec(email)
  }

  verifyPhone(p) {
    return p.length == 10 ? true : false
  }

  submit() {
    if (this.state.fullname == '' || !this.state.isEmailValid || !this.state.isPhoneValid) {
      Alert.alert('Error', 'bad request format, please check the inputs',
        [
          {
            text: 'OK',
            onPress: () => { }
          },
        ],
        { cancelable: false },
      )
    }
    else {
      console.log('clicked!!')
      return fetch('http://165.227.181.114:3003/testuser',
        {
          method: 'POST',
          mode: 'cors',
          credentials: 'omit',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: this.state.fullname,
            birthday: this.state.birthday,
            email: this.state.email,
            phone: this.state.phone
          })
        })
        .then((response) => response.json()).then((responseJson) => {
          if (!responseJson.error) {
            console.log(responseJson)
            Alert.alert('Success!', 'The user is added, please check history',
              [
                {
                  text: 'OK',
                  onPress: () => { }
                },
              ],
              { cancelable: false },
            )
          } else {
            Alert.alert('Error!', responseJson.error,
              [
                {
                  text: 'OK',
                  onPress: () => { }
                },
              ],
              { cancelable: false },
            )
          }
        }).catch((error) => {
          console.log(error)
          Alert.alert('Error!', 'we met with an unexpected error',
            [
              {
                text: 'OK',
                onPress: () => { }
              },
            ],
            { cancelable: false },
          )
        });
    }

  }

  clear() {
    this.setState({
      fullname: '',
      birthday: '',
      email: '',
      phone: ''
    })
  };

  render() {
    return (
      <Provider locale={enUS}>

        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <List renderHeader={'Input'}>
              <InputItem
                clear
                value={this.state.fullname}
                onChange={value => {
                  this.setState({
                    fullname: value,
                  });

                }}
                type="text"
              >Fullname</InputItem>
              <DatePicker
                value={this.state.birthday}
                mode="date"
                defaultDate={new Date()}
                minDate={new Date(1900, 1, 1)}
                maxDate={new Date()}
                onChange={value => this.setState({ birthday: value })}
                format="YYYY-MM-DD"
              >
                <List.Item arrow="horizontal">Birthday</List.Item>
              </DatePicker>
              <InputItem
                clear
                error={!this.state.isEmailValid}
                value={this.state.email}
                onChange={value => {
                  let res = this.verifyEmail(value)
                  if (!res) {
                    this.setState({
                      isEmailValid: false
                    });
                  }
                  else {
                    this.setState({
                      isEmailValid: true
                    });
                  }
                  this.setState({
                    email: value,
                  });

                }}
                type="text"
                placeholder="xxx@yyy.zzz"
              >Email</InputItem>
              <InputItem
                clear
                error={!this.state.isPhoneValid}
                value={this.state.phone}
                onChange={value => {
                  let res = this.verifyPhone(value)
                  if (!res) {
                    this.setState({
                      isPhoneValid: false
                    });
                  }
                  else {
                    this.setState({
                      isPhoneValid: true
                    });
                  }
                  this.setState({
                    phone: value,
                  });
                }}
                type="number"
                maxLength={10}
                placeholder="10-digit numbers"
              >Phone</InputItem>
            </List>

            <View style={styles.welcomeContainer}>
              <Image
                source={
                  require('../assets/images/earth.jpeg')
                }
                style={styles.welcomeImage}
              />
            </View>
            <Button type="primary" onPress={this.submit}>Submit</Button>
            {(this.state.fullname != '' || this.state.birthday != '' || this.state.phone != '' || this.state.email != '') &&
              <Button style={{ marginTop: 10 }} type="warning" onPress={this.clear}>Reset</Button>
            }
          </ScrollView>
        </View>
      </Provider>
    );
  }

}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 0,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: 'white',
    marginTop: 3,
    marginLeft: -10,
  },
});

export default HomeScreen