import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/Home'
import Settings from '../screens/settings/Settings'

const Tab = createBottomTabNavigator()

class MainNavigator extends React.Component{
    render(){
        return (
            <Tab.Navigator>
                <Tab.Screen 
                    name='home' 
                    options={{title: 'Покупки'}}  
                    component={Home} 
                />
                <Tab.Screen 
                    name='settings' 
                    options={{title: 'Настройки'}} 
                    component={Settings} 
                />
            </Tab.Navigator>
        )
    }
}

export default MainNavigator
