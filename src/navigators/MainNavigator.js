import React from "react";
import { View, Dimensions, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/home/Home';
import Setting from '../screens/settings/Settings';
import CopyPaste from '../screens/copyPaste/CopyPaste';

const Tab = createBottomTabNavigator();

class MainNavigator extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <Tab.Navigator
                    tabBarOptions={{
                        style: { height: 55 }
                    }}
                >
                    <Tab.Screen name="mainList"
                        component={Home}
                        initialParams={{}}
                        options={{
                            title: "Список",
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="shopping-bag"/* list shop*/ color={color} size={size} />
                            )
                        }} />
                    <Tab.Screen name="setting"
                        component={Setting}
                        options={{
                            title: "Настройки",
                            tabBarIcon: ({ color, size }) => (
                                <Icon name="settings"/* build */ color={color} size={size} />
                            )
                        }} />
                    <Tab.Screen name="copypaste"
                        component={CopyPaste}
                        options={{
                            title: "Проверка",
                            tabBarIcon: ({ color, size }) => (
                                <Icon name='low-priority' color={color} size={size} />
                            )
                        }} />
                </Tab.Navigator>
            </View>
        )
    }
}

export default MainNavigator;

const styles = StyleSheet.create({
    main: {
        position: "absolute",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 65
    }
})