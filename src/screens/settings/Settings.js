import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Settings extends React.Component{
    render(){
        return (
            <View style={styles.root}>
                <Text style={styles.label}>This is settings screen</Text>
            </View>
        )
    }
}

export default Settings

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        textAlign: 'center'
    }
})
