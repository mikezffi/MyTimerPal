import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Lottie from 'lottie-react-native'

import { useTimersContext } from '../services/TimersContext'
import TimerFormatter from '../components/TimeFormatter'
import TimesupModal from '../components/TimesupModal'
import MenuModal from '../components/MenuModal'
import Button from '../components/Button'

import colors from '../styles/colors'
import fonts from '../styles/fonts'
import { Animations } from '../assets/Animations'
import { Feather } from '@expo/vector-icons'; 

const { width, height } = Dimensions.get('window')
const itemSize = width * 0.52
const itemSpacing = (width - itemSize) / 2

export function Main() {
  //navigation
  const navigation = useNavigation()
  function handleAddTimer() {
    reset()
    setDeleteLast(false)
    navigation.navigate('AddTimer')
  }
  
  //context
  const {update, setUpdate} = useTimersContext()
  const {edit, setEdit} = useTimersContext()
  const {label, setLabel} = useTimersContext()
  const {animKey, setAnimKey} = useTimersContext()
  const {data, setData} = useTimersContext()
  const {callModal, setCallModal} = useTimersContext()
  const {menu, callMenu} = useTimersContext()

  //set contants for animations
  const scrollX = useRef(new Animated.Value(0)).current
  const [opacityON, setOpacityON] = useState(1)
  const [opacityOFF, setOpacityOFF] = useState(0)
  const [deleteLast, setDeleteLast] = useState(false)
  
  //timer calc constants
  const [index, setIndex] = useState(0)
  const [duration, setDuration] = useState()
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [animation, setAnimation] = useState(Animations[data[index].idAnim].uri)

  //update timers
  async function updateTimers() {
    var myArray = await AsyncStorage.getItem('@Timers')
    if (myArray !== null) {
      var objArray = JSON.parse(myArray)
      
      setData(objArray)

      setDuration(objArray[0].time)
      setTimerSeconds(objArray[0].time)
      setAnimation(Animations[animKey].uri)
      setAnimKey(0)
      setLabel('')
      setEdit(null)
    }
  }

  //update hook
  useEffect(() => {
    if (update == true) {
    updateTimers()
    }
  return setUpdate(false)
  },[update])
  
  //delete timer
  const deleteTimer = async () => {
    //bug fix (spamming)
    if (Number.isNaN(NaN))
      setIndex(0)

    if (data.length > 1) {
      data.splice(index, 1)
      
      await AsyncStorage.setItem('@Timers', JSON.stringify(data))
      updateTimers()
    }
    else {
      await AsyncStorage.setItem('@Timers', JSON.stringify([{id: 0,label:"Label", time: 0, idAnim: 0}]))
      setDeleteLast(true)
      updateTimers()
    }
  }

  //delete hook
  useEffect(() => {
    setTimerSeconds(duration)
    return
  }, [index])

  //reset timers
  function reset() {
    setIsActive(false)
    Pause(false)
    setTimerSeconds(duration)
    setOpacityON(1)
    setOpacityOFF(0)
  }

  const [isActive, setIsActive] = useState(false);
  const [paused, Pause] = useState(false)

  function toggleTimer() {
    if (!deleteLast) {
      setOpacityON(0)
      setOpacityOFF(1)
      setIsActive(!isActive)
      Pause(true)
    }
    else
    {
      handleAddTimer()
    }
  }

  useEffect(() => {
    if (isActive) {
      var interval = setInterval(() => {
        setTimerSeconds(timerSeconds => timerSeconds - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval)
    };
  }, [isActive, timerSeconds])

  useEffect(() => {
    if (timerSeconds < 0) {
      setCallModal(true)
      setOpacityON(1)
      setOpacityOFF(0)
      setIsActive(false)
      setTimerSeconds(data[index].time)
    }
  }, [timerSeconds])
  
  useEffect(() => {
    if (duration == 0) {
      setDeleteLast(true)
    }
  }, [duration])

  return (
    <SafeAreaView style={styles.container}>
      <TimesupModal />
      <MenuModal />
      <View style={[StyleSheet.absoluteFillObject, menu ? {zIndex: 100, opacity: 0.5, backgroundColor: colors.black} : '']} />
      {/* //header */}
      <View style={styles.header}>

        <Text style={styles.counter}>{index + 1}/{data.length}</Text>
        
        <TouchableOpacity onPress={() => {callMenu(!menu)}}>
        <View style={styles.menu}>
          <Text style={styles.menuText}>...</Text>
        </View>
        </TouchableOpacity>

      </View>

      <TouchableOpacity onPress={() => {
        setEdit(index)
        setAnimKey(data[index].idAnim)
        setLabel(data[index].label)
        handleAddTimer()
        }}>
      <View style={styles.label}>
        <Text style={styles.labelText}>{data[index].label}</Text>
        <Feather name="edit" size={14} color={colors.blue_dark} />
      </View>
      </TouchableOpacity>

      {/* //timer */}
      <View style={styles.timerContainer}>
        <Animated.FlatList 
          data={data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            { useNativeDriver: true }
            )}
            onScrollBeginDrag={() => {
              isActive && reset()
              paused && reset()
            }}
            onMomentumScrollEnd={ev => {
              const index = Math.round(ev.nativeEvent.contentOffset.x / itemSize);
              setIndex(index)
              setDuration(data[index].time)
              setAnimation(Animations[data[index].idAnim].uri)
          }}
          contentContainerStyle={{paddingHorizontal: itemSpacing}}
          style={{flexGrow: 0, opacity: opacityON}}
          snapToInterval={itemSize}
          getItemLayout={(data, index) => (
            {length: itemSize, offset: itemSize * index, index})}
          renderItem={
            ({item, index}) => {
              const inputRange = [
                (index - 1) * itemSize,
                index * itemSize,
                (index + 1) * itemSize,
              ]
              const scale = scrollX.interpolate({
                inputRange, 
                outputRange: [.4, 1.5, .4]
              })
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [.5, 1, .5]
              })

              return( 
                  <View style={{width: itemSize, justifyContent: 'center', alignItems: 'center'}}>
                    <Animated.Text style={[styles.time, {opacity, transform: [{scale}]} ]}>
                      {TimerFormatter(item.time)}
                    </Animated.Text>
                  </View>
              )
            }
          }
        />

        <View style={{width: itemSize, justifyContent: 'center', alignItems: 'center', position: 'absolute'}}>
          <Text style={[styles.timeDisplay, {opacity:opacityOFF, transform: [{scale: 1.5}]}]}>
            {TimerFormatter(timerSeconds)}
          </Text>
        </View>

      </View>

      {/* //image */}
      {/* <TouchableWithoutFeedback onPress={toggleTimer}> */}
      <Animated.View style={[styles.animationContainer, {}]}>
        <Lottie style={{}} source={animation} autoPlay={true} loop={true} />
      </Animated.View> 
      {/* </TouchableWithoutFeedback> */}

      {/* //controlls */}
      <View style={styles.controlls}>

        <Button title={"Delete"} onPress={deleteTimer} style={[
          {backgroundColor: colors.blue_light},
          {elevation: 2},
          {shadowColor: "#000"},
          {shadowOffset: {width: 0,height: 1,}},
          {shadowOpacity: 0.20},
          {shadowRadius: 1.41},
        ]} />

        <Button title={!isActive? "Start" : "Pause"} onPress={toggleTimer}
          style={[
            !isActive? {backgroundColor: colors.green_light} : {backgroundColor: colors.red},
            {borderRadius: 200},
            {height: 80},
          ]}
          styleText={[
            {fontFamily: fonts.titleI},
            {color: colors.white}
          ]}
          styleOp={[{width: '100%'}, {height: '100%'}]}
        />

        <Button title={!isActive? "New" : "Reset"} onPress={!isActive? handleAddTimer : reset} style={[
          {backgroundColor: colors.blue_light},
          {elevation: 2},
          {shadowColor: "#000"},
          {shadowOffset: {width: 0,height: 1,}},
          {shadowOpacity: 0.20},
          {shadowRadius: 1.41},
        ]} />

      </View>
    </SafeAreaView> //container
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  counter: {
    fontFamily: fonts.titleI,
    fontSize: 25,
    color: colors.blue_dark
  },
  menu: {                   
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  menuText: {
    fontFamily: fonts.titleI,
    fontSize: 20,
    color: colors.gray_dark,
    lineHeight: 14
  },

  label: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  labelText: {
    fontFamily: fonts.textI,
    color: colors.blue_dark,
    marginRight: 5
  },

  animationContainer: {
    flex: 1,
  },

  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 60,
    color: colors.blue,
    fontFamily: fonts.textI,
    letterSpacing: 1.2,
    textShadowColor: colors.gray_dark,
    textShadowRadius: 2,
    textShadowOffset: {width: 0, height: 2},
  },
  timeDisplay: {
    fontSize: 60,
    color: colors.red,
    fontFamily: fonts.textI,
    letterSpacing: 1.2,
    textShadowColor: colors.gray,
    textShadowRadius: 2,
    textShadowOffset: {width: 0, height: 2},
  },

  controlls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
});