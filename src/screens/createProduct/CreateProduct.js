import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spisok from "../../components/Spisok";

class CreateProduct extends React.Component{
    render(){
        return (
            <View style={styles.root}>
                <Spisok />
            </View>
        )
    }
}

export default CreateProduct

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
