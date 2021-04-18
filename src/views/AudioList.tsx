import React, {useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Dimensions} from 'react-native'
import {AudioContext} from "../context/AudioProvider";
import {LayoutProvider, RecyclerListView} from 'recyclerlistview'
import AudioListItem from "../components/AudioListItem";
import OptionModal from "../components/OptionModal";

class AudioList extends React.Component<any,any> {
    private currentItem: {};
    constructor(props:any) {
        super(props);
        this.state = {
            optionModalVisible:false
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

    private rowRenderer = (type:any, item:any) => {
        return (
            <AudioListItem
                title={item.filename}
                duration={item.duration}
                thumbnail={item.filename[0]}
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

