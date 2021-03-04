import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class CategoryListItem extends React.Component {
    render(){

        const { name, isActive, onPress } = this.props;

        return (
            <TouchableOpacity style = {{ paddingHorizontal: 40 }} onPress={onPress}>
                <Text style={{ color: isActive? 'red' : 'black' }}>{name}</Text>
            </TouchableOpacity>
        )
    }
}

export default CategoryListItem;