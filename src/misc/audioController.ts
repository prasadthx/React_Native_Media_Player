import {Audio, AVPlaybackStatus} from "expo-av";

//play audio

export const play = (playbackObject:Audio.Sound, uri:string):Promise<AVPlaybackStatus> => {
    return playbackObject.loadAsync({uri}, {shouldPlay: true}).then(
        (status:AVPlaybackStatus) => {
            return status
        }).catch(
        (error:any) => {
            throw new Error(error);
        }
    )
}

//pause audio

export const pause = (playbackObject:Audio.Sound):Promise<AVPlaybackStatus> => {
    return playbackObject.setStatusAsync({shouldPlay: false}).then(
        (status:AVPlaybackStatus) => {
            return status
        }
    ).catch(
        (error) => {throw new Error(error)}
    )

}

//resume audio

export const resume = (playbackObject:Audio.Sound):Promise<AVPlaybackStatus> => {
    return playbackObject.playAsync().then(
        (status:AVPlaybackStatus) => {
            return status
        }
    )
}


//select another audio

export const playAnother = (playbackObject:Audio.Sound, uri:string) => {
    return playbackObject.stopAsync().then(
        () => {
            return playbackObject.unloadAsync().then(
                () => {
                    return play(playbackObject, uri).then(
                        (status) => {
                            return status;
                        }
                    )
                }
            )
        }
    )
}