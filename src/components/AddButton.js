import React from 'react';
import ActionButton from 'react-native-action-button';

class AddButton extends React.Component {
    render() {
        const { onPress } = this.props;
        return (
            <ActionButton
                buttonColor="red"
                onPress={onPress}>
            </ActionButton>
        )
    }
}

export default AddButton;