import React from 'react';
import { View, TouchableOpacity, Alert, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const winHeight = Dimensions.get("window").height;

class FinalButton extends React.Component {
    render() {
        const { count, length, isListFull } = this.props;

        return (
            <View style={{
                position: "absolute"
            }}>
                {count == length && count > 0 && <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        isListFull();
                        Alert.alert("", "Спасибо за покупку");
                    }}>

                    <Icon style={styles.icon}
                        name={'done'}
                        color={"white"}
                        size={33} />
                </TouchableOpacity>}
            </View>
        )
    }
}

export default FinalButton;

const styles = StyleSheet.create({
    button: {
        width: 56,
        height: 56,
        marginTop: winHeight - 206,
        marginLeft: 30,
        borderRadius: 50,
        backgroundColor: "#008577"
    },
    icon: {
        position: "absolute",
        marginTop: 10,
        marginLeft: 12
    }
})