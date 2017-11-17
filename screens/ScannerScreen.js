// https://docs.expo.io/versions/latest/sdk/bar-code-scanner.html
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import { StackNavigator } from 'react-navigation';

export default class BarcodeScannerExample extends React.Component {
  state = {
    hasCameraPermission: null,
    lastScannedBarCode: ""
  }

  static navigationOptions = {
    title: "Details",
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }

  getInventoryData() {
    const { lastScannedBarCode } = this.state;
    console.log(lastScannedBarCode);
    return <Text>toto{lastScannedBarCode}</Text>;
  }

  render() {
    console.log("Render again");
    const { hasCameraPermission } = this.state;
    const lastScannedBarCode  = this.state.lastbarcoderead;
    const { navigate } = this.props.navigation;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
        {this.getInventoryData()}
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
        </View>
      );
    }
  }

  _handleBarCodeRead = ({ type, data }) => {
    this.setState({ lastScannedBarCode: data });
    //navigate('Details', {scanInfo: data})
  }
}
