import React, { useEffect, useState } from 'react'
import Routes from './src/routes'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font';

import TimersProvider from './src/services/TimersContext'

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
} from '@expo-google-fonts/montserrat/'

export default function App() {
  const [data, setData] = useState([{id: 0,label:"Label", time: 0, idAnim: 0}])
  const [loaded, Loaded] = useState(false)

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
  });

  async function _setLocalStorage() {
    var myData = await AsyncStorage.getItem('@Timers')
    if (myData !== null) {
      var objArray = JSON.parse(myData)
      setData(objArray)
      Loaded(true)
    }
    else {
      await AsyncStorage.setItem('@Timers', JSON.stringify(data))
      Loaded(true)
    }
  }

  useEffect(() => {
    _setLocalStorage()
  }, [])

  // if (!fontsLoaded)
  //  return (
  //   <AppLoading />
  //  )

  if (!loaded) {
    return (
      <AppLoading
        startAsync={_setLocalStorage()}
        onFinish={Loaded(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <TimersProvider data={data} setData={setData}>
      <Routes />
    </TimersProvider>
  );
}