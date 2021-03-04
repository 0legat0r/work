import React from 'react';
import {  Text, Switch, View } from 'react-native';



class ButtonSwitch extends React.Component {
    render() {
        return (
            <View
            style={{
                display: "flex",
                alignItems: "center"
              }}>
            <Text
            style={{
                color: 'green',
                fontSize: 30
            }}
            >    {this.props.name}    </Text>
            <Switch 
            value={this.props.status}
            onValueChange={this.props.toggleSwitch}
            />
            </View>
        )
    }
}

export default ButtonSwitch;