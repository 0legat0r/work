import React from "react";
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigator from './MainNavigator';
import CreateProduct from '../screens/createProduct/CreateProduct'

const Stack = createStackNavigator();

class RootNavigator extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <StatusBar backgroundColor="#00574a"
                    barStyle="light-content" />
                <Stack.Navigator>
                    <Stack.Screen
                        name='main'
                        options={{ title: 'Список покупок', }}
                        component={MainNavigator}
                    />
                    <Stack.Screen
                        name='create-product'
                        options={{ title: 'Добавить' }}
                        component={CreateProduct}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default RootNavigator;