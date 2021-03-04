import React from 'react';
import { View, Text } from 'react-native';

class CompanyListItem extends React.Component {
    render(){

        const { name, image } = this.props;

        return (
            <View style={{ width: '100%', height: 400, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{name}</Text>
            </View>
        )
    }
}

export default CompanyListItem;