import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

export default function Button({ styleOp, title, style, styleText, ...rest } ) {
   return (
        <View style={[styles.div, style]}>
     <TouchableOpacity style={[styles.press, styleOp]} {...rest} >
          <Text style={[styles.text, styleText]}>{title}</Text>
    </TouchableOpacity>
        </View>
   )
}

const styles = StyleSheet.create({
    div: {
      width: 80,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.bg,
      borderRadius: 7,
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    text: {
      textAlign: 'center',
      fontFamily: fonts.textI,
      color: colors.white,
    },
    press: {
      width: 80,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
    }
})