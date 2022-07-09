import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = props => {
  return (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyling}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyling: {
        fontSize: 22,
    },
    viewStyle: {
        backgroundColor: 'gainsboro',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    }
})

export default Header