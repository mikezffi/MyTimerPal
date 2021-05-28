import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Main } from '../pages/Main'
import { AddTimer } from '../pages/AddTimer'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'

import colors from '../styles/colors'

const stackRoutes = createStackNavigator()

const AppRoutes = () => (
   <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
         cardStyle: {
            backgroundColor: colors.bg
         },
      }}
   >
      <stackRoutes.Screen 
         name="Main"
         component={Main}
      />
      <stackRoutes.Screen 
         name="AddTimer"
         component={AddTimer}
      />
      <stackRoutes.Screen 
         name="About"
         component={About}
      />
      <stackRoutes.Screen 
         name="Contact"
         component={Contact}
      />
   </stackRoutes.Navigator>
)

export default AppRoutes