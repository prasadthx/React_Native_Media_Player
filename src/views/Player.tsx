import React, {useContext} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Slider from "@react-native-community/slider";
import PlayerButton from "../components/PlayerButton";
import {AudioContext} from "../context/AudioProvider";

const {width}:any=Dimensions.get('window').width;

const Player = () => {
    const context:any = useContext(AudioContext);
    const {playbackPosition , playbackDuration } = context
    const calculateSeekbar = () => {
        if(playbackDuration!==null && playbackPosition!==null){
            return playbackPosition / playbackDuration
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.audioCount}>{context.currentAudio.id+1} / {context.totalAudioCount}</Text>
            <View style={styles.midBannerContainer}>
                <MaterialCommunityIcons name="music-circle" size={280} color={'black'}/>
            </View>
            <View style={styles.audioPlayerContainer}>
                <Text numberOfLines={1} style={styles.audioTitle}>{context.currentAudio.filename}</Text>
            </View>
            <Slider
                style={{width: width, height: 40}}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                value = {calculateSeekbar()}
            />
            <View style={styles.audioControllers}>
                <PlayerButton iconType={'PREV'}/>
                <PlayerButton onPress={() => console.log('chutiya')}
                              style={{marginHorizontal:25}}
                              iconType={context.isPlaying ? 'PLAY' : 'PAUSE'}/>
                {/*<PlayerButton iconType={'PAUSE'}/>*/}
                <PlayerButton iconType={'NEXT'}/>
            </View>
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
    },
    audioControllers: {
        width,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20
    }
})

export default Player;

