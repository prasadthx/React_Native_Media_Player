import React, {createContext} from 'react';
import {View, Alert, Text} from "react-native";
import * as MediaLibrary from 'expo-media-library';
import {DataProvider} from 'recyclerlistview';

// @ts-ignore
export const AudioContext = createContext()

export class AudioProvider extends React.Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {
            audioFiles: [],
            permissionError:false,
            dataProvider : new DataProvider( (r1,r2) => r1!==r2),
            playbackObject:null,
            soundObject:null,
            currentAudio:null
        }
    }


    private permissionAlert() {
        Alert.alert("Permission Required", "THis app needs to read audio files",
            [{
                text:'I am ready',
                onPress:()=>this.getPermission()
            },{
                text:'Cancel',
                onPress:()=>this.permissionAlert()
            }]);
    }

    private getAudioFiles(){
        const {dataProvider, audioFiles} = this.state;
        MediaLibrary.getAssetsAsync({
            mediaType : 'audio'
        }).then(
            (media) => {
                MediaLibrary.getAssetsAsync({
                    mediaType:'audio',
                    first: media.totalCount
                }).then(
                    (audioMedia) => {
                        this.setState({...this.state,dataProvider:dataProvider.cloneWithRows([...audioFiles, ...audioMedia.assets]) ,audioFiles:[...audioFiles,...audioMedia.assets]})
                    }
                )
            }
        )
    }

    getPermission = () => {
        MediaLibrary.getPermissionsAsync().then(
            (permission) => {
                if(permission.granted){
                    this.getAudioFiles()
                }
                if(!permission.granted && permission.canAskAgain){
                    MediaLibrary.requestPermissionsAsync().then(
                        ({status, canAskAgain}) => {
                            if(status==='denied' && canAskAgain){
                                this.permissionAlert();
                            }
                            if(status==='granted'){
                                this.getAudioFiles()
                            }
                            if(status==='denied' && !canAskAgain){
                                this.setState({permissionError:true})
                            }
                        }
                    )
                }
                if (!permission.granted && !permission.canAskAgain){
                    this.setState({permissionError:true})
                }
            }
        )
    }

    componentDidMount() {
        this.getPermission()
    }

    updateState = (prevState:any, newState:any) => {
        this.setState({...prevState, ...newState})
    }

    render() {
        const {audioFiles, dataProvider, permissionError, currentAudio, playbackObject, soundObject} = this.state;
        if(permissionError){
            return (
                <View>
                    <Text> It looks like you haven't accepted the permission</Text>
                </View>
            )
        }
        return (
            <AudioContext.Provider value={{audioFiles,dataProvider, currentAudio, playbackObject, soundObject, updateState:this.updateState}}>
                {this.props.children}
            </AudioContext.Provider>
        );
    }

}