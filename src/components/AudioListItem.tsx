import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { Entypo } from '@expo/vector-icons'

const AudioListItem = (props:any) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.thumbnail}>
                    <Text style={styles.thumbnailText}>
                        A
                    </Text>
                </View>
                <View style={styles.titleContainer}>
                    <Text numberOfLines={1} style={styles.title}>
                        Scam Song Axajskskdjfksjdf
                    </Text>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <Entypo name="dots-three-vertical" size={24} color={'black'}/>
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
        backgroundColor:'gray',
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
        borderRadius:25,
        backgroundColor:'green',
    },
    thumbnailText: {
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center'
    }
})

export default AudioListItem