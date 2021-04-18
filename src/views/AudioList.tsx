import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native'
import {AudioContext} from "../context/AudioProvider";
import {LayoutProvider, RecyclerListView} from 'recyclerlistview'
import AudioListItem from "../components/AudioListItem";

class AudioList extends React.Component {
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

    rowRenderer = (type:any, item:any) => {
        return (
            <AudioListItem title={item.filename} duration={item.duration} thumbnail={item.filename[0]}/>
        )
    }

    render() {
        return (
            // @ts-ignore
            <AudioContext.Consumer>
                { ({dataProvider}:any) => {
                    // @ts-ignore
                    return (<View style={{flex:1}}>
                    <RecyclerListView
                        dataProvider={dataProvider}
                        layoutProvider={this.layoutProvider}
                        rowRenderer={this.rowRenderer}
                    />
                    </View>)
                }}
            </AudioContext.Consumer>
        )
    }
}



export default AudioList;

