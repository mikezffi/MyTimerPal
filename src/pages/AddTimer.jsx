import React, { useState, useEffect } from 'react'
import { Platform, StyleSheet, Text, View, Image, SafeAreaView, KeyboardAvoidingView, TextInput, Dimensions, SectionList, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useTimersContext } from '../services/TimersContext'
import { Animations, SECTIONS } from '../assets/Animations'
import DisplayFormatter from '../components/DisplayFormatter'
import Button from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

const { width, height } = Dimensions.get('window')

export function AddTimer() {
   const navigation = useNavigation()
   function handleCancel() {
      setUpdate(true)
      navigation.navigate('Main')
   }

   const [myData, setMyData] = useState()
   useEffect(() => {
      async function updateData() {
         setMyData(await AsyncStorage.getItem('@Timers'))
      }
      updateData()
   }, [])
   
   const {update, setUpdate} = useTimersContext()
   const {edit, setEdit} = useTimersContext()
   const {animKey, setAnimKey} = useTimersContext()
   const {label, setLabel} = useTimersContext()
   const [timeDisplay, setTimeDisplay] = useState('')

   const { mDisplay, sDisplay }  = DisplayFormatter(timeDisplay)
   
   const SaveHandler = async () => {
      Pressed(true)

      let minutes = Number(mDisplay)
      let seconds = Number(sDisplay)
      
      if (seconds >= 60) {
         minutes = minutes + (Math.floor((seconds / 60)))
         seconds = seconds % 60
      }
      
      let secOutput = seconds + (minutes * 60)

      if (myData !== null) {
         var objArray = JSON.parse(myData)
         var newTimer = [{id: (objArray.length -1), label: label == ''? Animations[animKey].text : label, time: secOutput, idAnim: animKey}]
         if ((objArray.length == 1) && (objArray[0].time == 0)) {
            objArray[0] = newTimer[0]

            await AsyncStorage.setItem('@Timers', JSON.stringify(objArray))
            setUpdate(true)
            navigation.navigate('Main')
         } else if (edit !== null) {
            objArray[edit] = newTimer[0]
            await AsyncStorage.setItem('@Timers', JSON.stringify(objArray))
            setUpdate(true)
            navigation.navigate('Main')
         }
         else
         {   
            objArray.push(...newTimer)
            
            await AsyncStorage.setItem('@Timers', JSON.stringify(objArray))
            setUpdate(true)
            navigation.navigate('Main')
         }  
      }
   }

   const [pressed, Pressed] = useState(false)

   const Item = ({ data }) => (
      <TouchableWithoutFeedback onPress={() => {setAnimKey(data.key)}}>
      <View style={[styles.item, 
         animKey == data.key ? {borderColor: colors.blue, borderWidth: 5, borderRadius: 20}: '']}>
         <View style={styles.itemText}>
            <Text style={{
               fontFamily: fonts.textI,
               fontSize: 24,
               textAlign: 'center',
               color: colors.black50,
               textShadowColor: colors.gray_dark,
               textShadowRadius: 2,
               textShadowOffset: {
                  height: 1,
                  width: -1
               }
            }}>
               {data.text}
            </Text>
         </View>
         <Image 
            source={data.img}
            style={{width: 300, height: 200}}
         />
      </View>
      </TouchableWithoutFeedback>
   );

   return(
      <SafeAreaView style={[styles.container]}>
         {/* Header */}
         <View style={[styles.labelContainer, {marginTop: Platform.OS == 'ios' ? 0 : 30}]}>
            <View style={[styles.controlls, {}]}>
               <Button title={"Cancel"} onPress={handleCancel} styleText={[{color: colors.black50}]} />

               <TextInput
                  style={{backgroundColor: colors.bg, opacity: 0.6, width: width * 0.4, height: 50, borderRadius: 50, paddingHorizontal: 5}}
                  textAlign={'center'}
                  placeholder={edit == null ? Animations[animKey].text : label}
                  placeholderTextColor={colors.gray_dark}
                  onChangeText={setLabel}
                  value={label}
               />

               <Button title={"Save"} onPress={!pressed ? SaveHandler : null} styleText={[{color: colors.black50}]} />
            </View>
         </View>

         {/* Body */}
         <SectionList
            style={[styles.section, {}]}
            removeClippedSubviews={true}
            sections={SECTIONS}
            keyExtractor={(item, index) => item + index}
            stickySectionHeadersEnabled={true}
            bounces={false}
            renderSectionHeader={({ section: { title } }) => <View style={[styles.header, {height: 60}]}><Text style={[styles.headerText, {marginBottom: height * 0.01}]}>{title}</Text></View>}
            renderItem={({ item }) => <Item data={item} />}
            ListFooterComponent={<View style={{height: height * 0.15}}></View>}
         />


         {/* Footer */}
         {Platform.OS == 'ios' ? 
            <KeyboardAvoidingView behavior={'position'}>
            <View style={styles.time}>
               <Text style={styles.timeText}>
               {mDisplay + "m" + sDisplay + "s"}
               </Text>
               <TextInput
                  style={styles.timeInput}
                  onChangeText={setTimeDisplay}
                  value={timeDisplay}
                  keyboardType={'decimal-pad'}
                  secureTextEntry={true}
                  caretHidden={true}
                  maxLength={4}

                  keyboardAppearance={'light'}
               />
            </View>
            </KeyboardAvoidingView>
         :
            <View style={styles.time}>
               <Text style={styles.timeText}>
               {mDisplay + "m" + sDisplay + "s"}
               </Text>
               <TextInput
                  style={styles.timeInput}
                  onChangeText={setTimeDisplay}
                  value={timeDisplay}
                  keyboardType={'decimal-pad'}
                  secureTextEntry={true}
                  caretHidden={true}
                  maxLength={4}
               />
            </View>
         }
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.blue_light
   },

   labelContainer: {
      backgroundColor: colors.blue_light,
      width: '100%',
      height: 100,
      padding: 10,
      justifyContent: 'center'
   },
   controlls: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
   },

   section: {
      backgroundColor: colors.white,
      height: '100%',
      zIndex: -1
   },
   header: {
      backgroundColor: colors.blue_light,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: 'flex-end',
      transform: [{translateY: -2}],
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,

      elevation: 18,
   },
   headerText: {
      textAlign: 'center',
      fontFamily: fonts.title,
      fontSize: 24,
      color: colors.white,
      textShadowColor: colors.black50,
      textShadowRadius: 2,
      textShadowOffset: {
         height: 0.6,
         width: -0.6
      }
   },

   item: {
      backgroundColor: colors.white,
      marginVertical: 15,
      marginHorizontal: 10,
      borderRadius: 15,
      
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

      justifyContent: 'center',
      alignItems: 'center',
   },
   itemText: {
      width: '100%',
      height: 40,
      justifyContent: 'center',
      backgroundColor: colors.gray_light,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
   },

   time: {
      flex: 1,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 100,

      justifyContent: 'center',
      alignItems: 'center',

      backgroundColor: colors.blue_light,

      color: colors.white,
      textAlign: 'center',
      fontSize: 60,
      fontFamily: fonts.title,
      letterSpacing: 30,
   },
   timeText: {
      fontSize: 60,
      color: colors.white,
      fontFamily: fonts.title,
   },
   timeInput: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      color: 'transparent'
   },
})