import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

var qw = "<---";
class ButtonLeft extends React.Component {
    
    render() {
        return (
            <TouchableOpacity onPress={this.props.reduce}>
                <Text>{qw}Left</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonLeft;