import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({buttonPress}) => {
    const { textStyle, buttonStyle } = styles

  return (
    <TouchableOpacity onPress={buttonPress} style={buttonStyle}>
        <Text style={textStyle}>Click me</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 14,
        fontWeight: '500',
        paddingTop: 6,
        paddingBottom: 6,
        color: 'white'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'grey',
        borderWidth: 1,
        borderColor: 'gainsboro',
        marginLeft: 7,
        marginRight: 7
    }
})

export default Button