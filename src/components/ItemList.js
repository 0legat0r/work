import React from 'react';
import { TouchableOpacity, Text, View, Switch, Dimensions, ToastAndroid, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const winWidth = Dimensions.get("window").width;

class ItemList extends React.Component {
    render() {
        const { id, name, isSelected, deleteItem, toggleSwitch } = this.props;
        return (
            <View style={styles.main}>
                <Switch style={styles.switch}
                    onValueChange={() => { toggleSwitch(isSelected, id) }}
                    value={isSelected}
                />
                <View style={styles.mainText}>
                    <Text style={[styles.text, isSelected && styles.textSelected]}>
                        {name}
                    </Text>
                    <TouchableOpacity style={styles.button}
                        onPress={() => {
                            deleteItem(id, isSelected);
                            ToastAndroid.show("Удалено", ToastAndroid.SHORT);
                        }}>
                        <Icon name='close'
                            type="MaterialIcons"
                            size={23} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ItemList;

const styles = StyleSheet.create({
    main: {
        width: winWidth - 40,
        height: 45,
        marginTop: 10,
        marginLeft: 15,
    },
    switch: {
        position: "absolute",
        margin: 8,
    },
    mainText: {
        borderBottomWidth: 1,
        width: 302,
        height: 36,
        marginLeft: 60,
    },
    text: {
        width: 266,
        height: 26,
        marginTop: 10,
        marginLeft: 2,
        fontSize: 16,
        textDecorationLine: "none",
        color: "black"
    },
    textSelected: {
        textDecorationLine: "line-through",
        color: "darkgray"
    },
    button: {
        width: 25,
        height: 25,
        position: "absolute",
        marginTop: 9,
        marginLeft: 275,
    }
})