import React, { useState } from 'react'
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'





const Pokupki = ({ name, isComplete, complete, del, delAll}) => {
    const [text,setText] = useState('')
    changeText = text => setText(text)
    return(
    <View>
        <View>
            <TextInput value = {name} onChangeText={changeText}/>
        </View>


        <View>
            <Switch
                onValueChange={complete}
                value={isComplete}
                style = {styles.buttonDel}
            />
            <TouchableOpacity
                onPress={del}
                style = {styles.buttonDel}
            >
                <Text style = {styles.buttonDel}>
                    X
                </Text>
            </TouchableOpacity>
        </View>
    </View>
)
}
Pokupki.defaultProps  = {
    name:  'm',
    isComplete: false,
    complete: () => {},
    del: () => {}
}

const styles = StyleSheet.create({
    buttonDel:{
        flex: 1
    }
})

export default Pokupki;