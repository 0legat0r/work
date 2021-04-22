import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { withState } from "../../hoc/withState";


class CopyPaste extends React.Component {
  render() {
    const { onCopy, onPaste, text } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={()=>{onCopy()}}>
            <Text>Click here to copy to Clipboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onPaste()}}>
            <Text>View copied text</Text>
          </TouchableOpacity>

          <Text style={styles.copiedText}>{text}</Text>
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
});

export default withState(CopyPaste);