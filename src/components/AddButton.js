import React from 'react'
import ActionButton from 'react-native-action-button';

class AddButton extends React.Component {
    render() {

        const { onPress } = this.props

        return (
            <ActionButton 
                buttonColor="rgba(231,76,60,1)"
                onPress={onPress}
            />
        )
    }
}

export default AddButton;
