import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
//import AppState from '../../store/Index';
import { withState } from "../../hoc/withState";

const winWidth = Dimensions.get("window").width;

class CreateProduct extends React.Component {
    state = {
        itemName: ''
    }
    render() {
        const { itemName } = this.state;
        const { navigation, addItem } = this.props;
        return (
            <View style={styles.main}>
                <TextInput style={styles.input}
                    placeholderTextColor={"lightgray"}
                    placeholder="Введите название..."
                    autoFocus={true}
                    onChangeText={(itemName) => this.setState({ itemName })}
                    value={itemName}
                />

{/*                 <AppState.Consumer>{
                    ({ addItem }) => ( */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                addItem(itemName),
                                navigation.navigate('mainList')
                            }}
                        >
                            <Text style={styles.text}>
                                OK</Text>
                        </TouchableOpacity>
{/*                     )
                }
                </AppState.Consumer> */}
            </View >
        )
    }
}

export default withState(CreateProduct);

const styles = StyleSheet.create({
    main: {
        height: 75,
        backgroundColor: "#008577",
        elevation: 10
    },
    input: {
        borderBottomWidth: 1,
        width: winWidth * 7 / 10 - 16,
        height: 40,
        margin: 16,
        borderColor: "lightgray",
        color: "white",
        fontSize: 16
    },
    button: {
        width: winWidth * 1 / 5 + 10,
        height: 40,
        position: "absolute",
        marginLeft: winWidth * 6 / 10 + 62,
        marginTop: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 16,
        color: "white"
    }
})
