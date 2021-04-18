import React from 'react';
import {View, StyleSheet, Modal, StatusBar, Text, TouchableWithoutFeedback} from 'react-native';

const OptionModal = ({visible, currentItem, onClose, onPlayPress}:any) => {
    return (
        <>
            <StatusBar hidden/>
            <Modal animationType='slide' transparent visible={visible}>
                <View style={styles.modal}>
                    <Text style={styles.title} numberOfLines={2}> {currentItem.filename} </Text>
                    <View style={styles.optionContainer}>
                        <TouchableWithoutFeedback>
                            <Text style={styles.option} onPress={onPlayPress}>Play</Text>
                        </TouchableWithoutFeedback>
                        <Text style={styles.option} onPress={()=>console.log("Next")}>Next</Text>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalBG}/>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modal: {
        position: 'absolute',
        bottom:0,
        right:0,
        left:0,
        backgroundColor:'black',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        zIndex:5
    },
    title: {
        fontSize:18,
        fontWeight:'bold',
        padding:20,
        paddingBottom:0,
    },
    optionContainer: {
        padding:20
    },
    option:{
        fontSize:16,
        fontWeight:'bold',
        paddingVertical:10
    },
    modalBG: {
        position: 'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:'rgba(255,255,255,0.5)'
    }
})

export default OptionModal;
