import React from "react";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import {withState} from '../../hoc/withState';

class Setting extends React.Component {

    render() {
        const { onCopy, onPaste } = this.props;
        return (
            <View>
                <TextInput />
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

export default withState(Setting);