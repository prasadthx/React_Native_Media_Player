import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native'
import {AudioContext} from "../context/AudioProvider";
import {LayoutProvider, RecyclerListView} from 'recyclerlistview'
import AudioListItem from "../components/AudioListItem";
import OptionModal from "../components/OptionModal";
import {Audio, AVPlaybackStatus} from 'expo-av';
import {pause, play, resume, playAnother} from '../misc/audioController'

class AudioList extends React.Component<any,any> {
    private currentItem: {};
    constructor(props:any) {
        super(props);
        this.state = {
            optionModalVisible:false,
        }
        this.currentItem = {}
    }
    static contextType = AudioContext
    layoutProvider = new LayoutProvider((index) => 'audio', (type, dim) => {
        switch (type){
           case 'audio':
               dim.width = Dimensions.get('window').width
               dim.height = 70
               break
            default:
                dim.width = 0
                dim.height = 0
        }

    })

    private handleAudioPress(item:any){

        const {currentAudio, playbackObject, soundObject} = this.context

        if(soundObject===null) {
            const playbackObject = new Audio.Sound()
            play(playbackObject, item.uri).then(
                (status) => {
                    console.log(status)
                    return this.context.updateState(this.context, {
                        currentAudio:item,
                        playbackObject: playbackObject,
                        soundObject:status
                    })
                }
            )
        }
        else if(soundObject.isLoaded && soundObject.isPlaying && currentAudio.id === item.id){
            pause(playbackObject).then(
                (status:AVPlaybackStatus) => {
                    console.log(status)
                    return this.context.updateState(this.context, {
                        soundObject:status
                    })
                }
            )
        }
        else if(soundObject.isLoaded &&
           !soundObject.isPlaying &&
           currentAudio.id === item.id
        ){
            resume(playbackObject).then(
                (status:AVPlaybackStatus) => {
                    console.log(status)
                    return this.context.updateState(this.context, {
                        soundObject:status
                    })
                }
            )
        }

        else if(soundObject.isLoaded && currentAudio !== item.id){
            playAnother(playbackObject, item.uri).then(
                (status:any) => {
                    return this.context.updateState(this.context, {
                        currentAudio:item,
                        soundObject:status,
                    })
                }
            )
        }
    }

    private rowRenderer = (type:any, item:any) => {
        return (
            <AudioListItem
                title={item.filename}
                duration={item.duration}
                thumbnail={item.filename[0]}
                onAudioPress={()=>this.handleAudioPress(item)}
                onOptionPress = { () => {
                    this.currentItem = item
                    this.setState({optionModalVisible:true})
                }}
            />
        )
    }

    render() {
        return (
            // @ts-ignore
            <AudioContext.Consumer>
                { ({dataProvider}:any) => {
                    // @ts-ignore
                    return (
                        <View style={{flex:1}}>

                            <RecyclerListView
                                dataProvider={dataProvider}
                                layoutProvider={this.layoutProvider}
                                rowRenderer={this.rowRenderer}
                            />

                            <OptionModal
                                onPlayPress={()=>(console.log("Play pressed"))}
                                currentItem = {this.currentItem}
                                visible={this.state.optionModalVisible}
                                onClose={()=>this.setState({optionModalVisible:false})}
                            />
                        </View>
                    )
                }}
            </AudioContext.Consumer>
        )
    }
};



export default AudioList;

