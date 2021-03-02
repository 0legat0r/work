import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

var qw = "--->";
class ButtonRight extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.increase}>
                <Text>Right{qw}</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonRight;