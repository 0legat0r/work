import React from 'react';
import RootNavigator from './navigators/RootNavigator';
import Store from './store/Store';

class App extends React.Component {
    render() {
        return (
            <Store>
                <RootNavigator />
            </Store>
        )
    }
}

export default App;