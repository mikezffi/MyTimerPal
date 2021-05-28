import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function About() {
   const navigation = useNavigation()
   function handleMain() {
      navigation.navigate('Main')
   }
   function handleContact() {
      navigation.navigate('Contact')
   }

   return(
      <SafeAreaView style={[styles.container]}>
         <ScrollView>
         <SafeAreaView style={styles.content}>
            <Text style={styles.title}>About</Text>

            <Text style={styles.text}>MyTimerPal is a free app to help people organize their workouts.</Text>
            <Text style={styles.text}>You can set different timers with different exercise names and animations.</Text>
            <Text style={styles.text}>Maintaining your workout rhythm and keeping your focus on the execution of each exercise.</Text>
            <Text style={styles.text}>This will improve the quality of your training and achieve better results.</Text>
            
            <Text style={[styles.text, {fontSize: 12, marginTop: 20}]}>If you want to know more about the development of MyTimerPal see the contact page.</Text>
         
            <TouchableOpacity onPress={handleContact}>
            <Text style={{fontSize: 16, fontFamily: fonts.title, color: colors.blue}}>Contact</Text>
            </TouchableOpacity>
         </SafeAreaView>
         </ScrollView>

         <TouchableOpacity style={styles.backButton} onPress={handleMain}>
            <Text style={{fontSize: 24, fontFamily: fonts.title, color: colors.white}}>Back to Main page!</Text>
         </TouchableOpacity>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.bg,
   },
   content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: '5%'
   },
   title: {
      textAlign: 'center',
      fontSize: 24,
      fontFamily: fonts.text,
      marginTop: '20%',
      marginBottom: 20,
      color: colors.black50
   },
   text: {
      textAlign: 'center',
      fontSize: 16,
      fontFamily: fonts.textI,
      padding: 10,
      color: colors.black50
   },
   backButton: {
      height: 70,
      width: '100%',
      backgroundColor: colors.blue,
      justifyContent: 'center',
      alignItems: 'center'
   }
})