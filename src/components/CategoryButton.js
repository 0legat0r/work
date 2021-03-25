import React from 'react';
import {  Text, TouchableOpacity } from 'react-native';



class ButtonSwitch extends React.Component {
    
    render() {
        const {category,onPress} = this.props;
        return (
            <TouchableOpacity onPress={onPress}>
                <Text>{category}</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonSwitch;