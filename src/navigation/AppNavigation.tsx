import React from 'react';
import {} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AudioList from '../views/AudioList';
import Player from '../views/Player';
import PlayList from '../views/PlayList';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()
const AppNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={'AudioList'}
                component={AudioList}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <MaterialIcons name={'headset'} size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name={'Player'}
                component={Player}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <FontAwesome5 name={'compact-disc'} size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen
                name={'PlayList'}
                component={PlayList}
                options={{
                    tabBarIcon: ({color, size}) => {
                        return <MaterialIcons name={'library-music'} size={size} color={color} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}


export default AppNavigator;

