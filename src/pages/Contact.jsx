import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Contact() {
   const navigation = useNavigation()
   function handleMain() {
      navigation.navigate('Main')
   }
   const linkOlena = () => {
      Linking.openURL('https://lottiefiles.com/elitra')
   }
   const linkMywebsite = () => {
      Linking.openURL('https://mikezffi.com')
   }
   
   return(
      <SafeAreaView style={styles.container}>
         <ScrollView>
         <View style={styles.content}>
            <View>
               <Text style={styles.title}>Hello, I'm mike!</Text>
               <Text style={{fontSize: 20, textAlign: 'center', lineHeight: 25, padding: 10}}>😙✌️</Text>

               <Text style={styles.text}>
                  I'm a Brazilian developer starting out and this is my first app.{"\n"}
                  Wille trying to organize my home workout I couldn't find a app the way I wanted, so I decided to make one.{"\n"}
                  I created MyTimerPal using React Native, with Expo CLI and some other tools.{"\n"}
                  This is version 0.98686(👀) so you may enconter some bugs(most definitely...) 
                  but I will keep updating and fixing things in the next releases.{"\n"}
                  Since this is a App I like to use, will be adding some new functionalities and optimizing it in the future.{"\n"}
               </Text>
            </View>
            <View style={styles.content}>
               <Text style={styles.text}>If you need anything feel free to reach me in any of my social media</Text>
               <TouchableOpacity onPress={linkMywebsite}>
                  <Text style={{fontSize: 16, fontFamily: fonts.title, color: colors.blue}}>My website</Text>
               </TouchableOpacity>

               <Text style={styles.text}>All the Lottie files are made by the awesome artist Olena. If you need some amazing animations reach her out!</Text>
               <TouchableOpacity onPress={linkOlena}>
                  <Text style={{fontSize: 16, fontFamily: fonts.title, color: colors.blue}}>Olena's LottieFiles Page</Text>
               </TouchableOpacity>
            </View>
         </View>
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
      marginHorizontal: '5%',
      marginTop: '10%',
      marginBottom: '10%',
   },
   title: {
      textAlign: 'center',
      fontSize: 24,
      fontFamily: fonts.text,
      marginTop: 30,
      marginBottom: 20,
      color: colors.black50,
   },
   text: {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 25,
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