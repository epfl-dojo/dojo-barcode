import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { navigation } from 'react-navigation';

export default class DetailsScreen extends React.Component {

  static navigationOptions = {{ navigation }} => ({
    title:"titi",
//    data: navigation.state.params.data
  });

  render() {
    const {{ goBack }} = this.props.navigation;

    return (
      <View style={{ flex: 1 }}>
      <Text>{{lastbarcoderead}}</Text>
        <BarCodeScanner
          onBarCodeRead={this._handleBarCodeRead}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }

  _handleBarCodeRead = ({ type, data }) => {
    debugger;
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

  }
}
