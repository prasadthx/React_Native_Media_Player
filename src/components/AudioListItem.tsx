import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback} from 'react-native'
import { Entypo } from '@expo/vector-icons'

const renderPlayPauseIcon = (isPlaying: any) => {
    if (isPlaying){
        return <Entypo name="controller-paus" size={24} color={'black'}/>
    }
    return <Entypo name="controller-play" size={24} color={'black'}/>
}
const AudioListItem = ({title, duration, thumbnail, onOptionPress, onAudioPress, isPlaying, activeListItem}: any) => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onAudioPress}>
            <View style={styles.leftContainer}>
                <View style={styles.thumbnail}>
                    <Text style={styles.thumbnailText}>
                        {/*{thumbnail}*/}
                        {activeListItem ? renderPlayPauseIcon(isPlaying) : thumbnail }
                        {/*{}*/}
                    </Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={1} style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.timeText}>{duration}</Text>
                </View>
            </View>
            </TouchableWithoutFeedback>
            <View style={styles.rightContainer}>
                <Entypo
                    onPress ={onOptionPress}
                    name="dots-three-vertical"
                    size={24}
                    color={'black'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignSelf:'center',
        height:50,
        width : Dimensions.get('window').width -80,
    },
    rightContainer: {
        flex:0.1,
        justifyContent:'center',
    },
    leftContainer: {
        flexDirection:'row',
        alignItems:"center",
        flex:0.9
    },
    title:{
        paddingHorizontal:10
    },
    titleContainer:{
        flex:0.9
    },
    thumbnail: {
        flex:0.2,
        height:50,
        justifyContent:'center',
        borderRadius:25
    },
    thumbnailText: {
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center'
    },
    timeText:{
        color:'grey',
        fontWeight:'200'
    }
})

export default AudioListItem