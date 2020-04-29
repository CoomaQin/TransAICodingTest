import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { IpItem } from '../constants/userRecordItem';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar, InputItem, Button, WingBlank, DatePicker, List, Provider, Radio, WhiteSpace, Stepper } from '@ant-design/react-native';
import enUS from '@ant-design/react-native/lib/locale-provider/en_US';



class LinksScreen extends React.Component {

  constructor(props) {
    super(props)
    this.fetchUserRecords = this.fetchUserRecords.bind(this)
    this.reflash = this.reflash.bind(this)
    this.compareDates = this.compareDates.bind(this)
    this.state = {
      records: [],
      keywords: '',
      dateStart: '',
      dateEnd: ''
    };
    this.fetchUserRecords()

  }

  componentDidMount() {
    // this.fetchIpRecords
  }

  reflash() {
    this.setState({
      keywords: '',
      dateStart: '',
      dateEnd: ''
    })
    this.fetchUserRecords()
  }

  compareDates(a, b) {
    var dateA = new Date(a);
    var dateB = new Date(b);
    console.log(dateA, dateB)
    if (dateA >= dateB)
      return true
    else
      return false
  }

  fetchUserRecords() {
    console.log('fetch!!')
    return fetch('http://192.168.0.11:3003/testuser',
      {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => response.json()).then((responseJson) => {
        if (!responseJson.error) {
          console.log(responseJson)
          this.setState({ records: responseJson, })
        }
        else {
          Alert.alert('Error', responseJson.error,
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
        console.log('eeeee')
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

  render() {
    if (this.state.records.length > 0)
      content = <FlatList
        style={styles.listContainer}
        data={this.state.records}
        renderItem={({ item, index }) =>
          <IpItem data={item} />}
        keyExtractor={item => item['_id']}
      />
    else content = <Text style={styles.empty}>No record found.</Text>
    return (
      <Provider locale={enUS}>
        <View style={styles.root}>
          <SearchBar
            value={this.state.keywords}
            placeholder="search by name"
            onChange={value => {
              if (value == '') {
                this.reflash()
              }
              this.setState(previousState => ({
                keywords: value,
                records: previousState.records.filter((rec) => rec.fullname.includes(value))
              }))
            }}
            onCancel={this.reflash}
          />
          <List>
            <DatePicker
              value={this.state.dateStart}
              mode="date"
              defaultDate={new Date()}
              minDate={new Date(1900, 1, 1)}
              maxDate={new Date()}
              onChange={value => {
                console.log(value)
                this.setState(previousState => ({
                  dateStart: value,
                  records: previousState.records.filter((rec) => this.compareDates(rec.birthday, value))
                }))
              }}
              format="YYYY-MM-DD HH:mm"
            >
              <List.Item arrow="horizontal">Select Birthday From</List.Item>
            </DatePicker>
            <DatePicker
              value={this.state.dateEnd}
              mode="datetime"
              defaultDate={new Date()}
              minDate={this.state.dateStart == '' ? new Date(1900, 1, 1): this.state.dateStart}
              maxDate={new Date()}
              onChange={value => {
                console.log(value)
                this.setState(previousState => ({
                  dateEnd: value,
                  records: previousState.records.filter((rec) => this.compareDates(value, rec.birthday))
                }))
              }}
              format="YYYY-MM-DD HH:mm"
            >
              <List.Item arrow="horizontal">Select Birthday To</List.Item>
            </DatePicker>
          </List>
          {content}
          <Button type="primary" onPress={this.reflash}>Reflash</Button>
        </View>
      </Provider>

    )

  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  empty: {
    width: "100%",
    textAlign: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    fontSize: 15,
  },
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: "column",
    height: '100%',
    width: '100%'
  },
});

export default LinksScreen