import React from 'react';
import moment from 'moment'
import { Ionicons, AntDesign, FontAwesome, FontAwesome5, Foundation, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { Text, View, StyleSheet } from 'react-native';
import { Card, Provider, WhiteSpace, WingBlank } from '@ant-design/react-native';

import enUS from '@ant-design/react-native/lib/locale-provider/en_US';

function formatDateTime(d) {
    return moment(d).format('MMMM Do YYYY, h:mm:ss')
}

function formatDate(d) {
    return moment(d).format('MMM/DD/YYYY')
  }

class IpItem extends React.Component {
    render() {
        return (
            <Provider locale={enUS}>
                <Card>
                    <Card.Header
                        title={this.props.data.fullname}
                        thumbStyle={{ width: 30, height: 30 }}
                        thumb="https://img.icons8.com/material-outlined/24/000000/user--v1.png"
                    />
                    <Card.Body>
                        <View style={{ height: 50 }}>
                            <Text style={{ marginLeft: 16 }}>{'Birthday: ' + formatDate(this.props.data.birthday)}</Text>
                            <Text style={{ marginLeft: 16 }}>{'Email: ' + this.props.data.email}</Text>
                            <Text style={{ marginLeft: 16 }}>{'Phone: ' + this.props.data.phone}</Text>

                        </View>
                    </Card.Body>
                    <Card.Footer
                        extra={"Create at: " + formatDateTime(this.props.data.createdAt)}
                    />
                </Card>
            </Provider>
        );
    }
}

export { IpItem }
