import React from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Clipboard from '@react-native-clipboard/clipboard';
import withState from "../hoc/withState"
import { AppStore } from '../AppStore';

class CopyTest extends React.Component {
    render() {

        const { onCopy, onPaste } = this.props

        return (
            <View>
            <TouchableOpacity
                onPress={onCopy}
            >
                <Text>
                    copy
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPaste}
            >
                <Text>
                    paste
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

export default withState(CopyTest);
