import React from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { useTimersContext } from '../services/TimersContext'

import { Feather } from '@expo/vector-icons'; 

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function MenuModal() {
    const navigation = useNavigation()
    function handleAbout() {
        navigation.navigate('About')
        callMenu(false)
    }
    function handleContact() {
        navigation.navigate('Contact')
        callMenu(false)
    }

    const {menu, callMenu} = useTimersContext()

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={menu}
        >
            <TouchableWithoutFeedback onPress={() => {callMenu(false)}}><View style={styles.fade} /></TouchableWithoutFeedback>
            <View style={styles.modalView}>
                <View style={styles.modalSection}>
                    <Feather name="menu" size={30} color={colors.gray} onPress={() => {callMenu(false)}} />
                </View>
                <TouchableOpacity onPress={handleAbout} style={styles.modalSection}>
                    <Text style={styles.modalText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleContact} style={[styles.modalSection, {marginBottom: 40}]}>
                    <Text style={styles.modalText}>Contact</Text>
                </TouchableOpacity>
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    fade: {
        flex: 1,
    },
    modalView: {
        flex: 1,
        height: 150,
        width: '95%',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: colors.bg,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalSection: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: colors.gray_light,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        
    },
    modalText: {
        color: colors.blue,
        textAlign: 'center',
        fontSize: 24,
        fontFamily: fonts.text
    }
});