import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 40
    },
    selected: {
        textDecorationLine: 'line-through'
    }
})

class Product extends React.Component{
    render(){

        const { id, name, isSelected, onDelete, onSelect } = this.props

        return (
            <TouchableOpacity 
                style={styles.root} 
                onPress={()=>onSelect(id)}
            >
                <Text style={[styles.name, isSelected && styles.selected]}>
                    {name}
                </Text>
                <Button 
                    title='Remove'
                    onPress={() => onDelete(id)}
                />
            </TouchableOpacity>
        )
    }
}

export default Product
