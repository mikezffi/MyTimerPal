import React, { useEffect } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View, Vibration } from 'react-native'

import { useTimersContext } from '../services/TimersContext'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function TimesupModal() {
   const {callModal, setCallModal} = useTimersContext()

   useEffect(() => {
      if (callModal)
      Vibration.vibrate()
   }, [callModal])

   return (
      <Modal
         animationType="slide"
         transparent={true}
         visible={callModal}
      >
         <View style={styles.modalView}>
         <TouchableOpacity onPress={() => {setCallModal(false)}}>
            <Text style={[styles.modalText]}>Time's up</Text>
            <Text style={[styles.modalText, {fontSize: 100}]}>🎉</Text>
            <View style={styles.modalNext}><Text style={[styles.modalText, {color: colors.white}]} >Next</Text></View>
         </TouchableOpacity>
         </View>
      </Modal>
   );
}

const styles = StyleSheet.create({
   modalView: {
      justifyContent: 'space-evenly',
      height: 300,
      marginTop: '50%',
      marginHorizontal: '10%',
      backgroundColor: colors.white,
      padding: 20,
      borderRadius: 20,
      shadowColor: colors.black,
      shadowOffset: {
      width: 0,
      height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   modalText: {
      textAlign: 'center',
      fontFamily: fonts.title,
      fontSize: 30,
      color: colors.gray_dark
   },
   modalNext: {
      color: colors.white,
      height: 40,
      fontSize: 40,
      marginTop:20,
      backgroundColor: colors.green,
      borderRadius: 10,
      justifyContent: 'center',
      shadowColor: "#000",
      shadowOffset: {
	      width: 0,
	      height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.00,
      elevation: 1,
   }
});