import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


class ButtonRight extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.increase}>
                <Text>Right</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonRight;