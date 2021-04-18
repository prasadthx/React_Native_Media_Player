import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from "@react-native-community/slider";

const {width}:any=Dimensions.get('window').width;

const Player = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.audioCount}>1 / 99</Text>
            <View style={styles.midBannerContainer}>
                <MaterialCommunityIcons name="music-circle" size={280} color={'black'}/>
            </View>
            <View style={styles.audioPlayerContainer}>
                <Text numberOfLines={1} style={styles.audioTitle}>Audio File Name</Text>
            </View>
            <Slider
                style={{width: width, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    audioCount: {
        textAlign: 'right',
        padding:15,
        color:'gray',
    },
    midBannerContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    audioPlayerContainer: {

    },
    audioTitle: {
        fontSize:16,
        padding:30
    }
})

export default Player;

