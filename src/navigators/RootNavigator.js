import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainNavigator from './MainNavigator'
import CreateProduct from '../screens/createProduct/CreateProduct'

const Stack = createStackNavigator()

class RootNavigator extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen 
                        name='main' 
                        options={{ title: 'Покупки'}} 
                        component={MainNavigator} 
                    />
                    <Stack.Screen 
                        name='create-product' 
                        options={{ title: 'Добавить'}} 
                        component={CreateProduct} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default RootNavigator