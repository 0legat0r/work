import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


class ButtonLeft extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.reduce}>
                <Text>Left</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonLeft;