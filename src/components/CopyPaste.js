import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import AppState from '../store/Index';

const CopyPaste = () => {
  const [copiedText, setCopiedText] = useState('');

   copyToClipboard = () => {
    Clipboard.setString('hello world');
    console.log('copy');
  };

   fetchCopiedText = async () => {
    
    const text = await Clipboard.getString();
    var txt = text;
    setCopiedText(text);
    console.log('copy');
  };
  
  return (
    <AppState.Provider
      value={{
        toPaste: this.copyToClipboard,
        toCopy: this.fetchCopiedText,
        text: txt
      }}
    >

    </AppState.Provider>
  );
};

export default CopyPaste;