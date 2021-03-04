import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';


class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity 
            style={{
                display: "flex",
                alignItems: "center"
              }}
            onPress={this.props.setDone}>
                <Image
                    style={{
                        flex: 1,
                        width: 350,
                        height: 350,
                        borderRadius: 10
                    }}
                    source={{ uri: this.props.picture }} 
                />
            </TouchableOpacity>
        )
    }
}

export default Button;