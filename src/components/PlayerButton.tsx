import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
const PlayerButton = (props:any) => {
    const getIconName = (type:string) => {
        switch (type) {
            case 'PLAY':
                return 'pausecircle';
            case 'PAUSE':
                return 'playcircle';
            case 'NEXT':
                return 'forward';
            case 'PREV':
                return 'banckward';
        }
    }
    const {style, iconType, size=40, color, onPress } = props
    return (
            <AntDesign
                style={style}
                onPress={onPress}
                name={getIconName(iconType)}
                size={size}
                color={color}
            />
        )
};

const styles = StyleSheet.create({
    container: {

    },
})

export default PlayerButton;