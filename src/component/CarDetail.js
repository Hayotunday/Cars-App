import React from 'react'
import { StyleSheet, Text, View, Image, Linking } from 'react-native'

import Item from './Item'
import ItemSection from './ItemSection'
import Button from './Button'

const CarDetail = ({ car }) => {
    const { headerContainer, headerText, imageStyle} = styles

  return (
    <Item>
        <ItemSection>
            <View style={headerContainer}>
                <Text style={headerText}>{car.brand}</Text>
                <Text style={headerText}>{car.name}</Text>
            </View>
        </ItemSection>
        <ItemSection>
            <Image
                style={imageStyle}
                source={{ uri: car.image }}
            />
        </ItemSection>
        <ItemSection>
            <Button 
                buttonPress={() => {
                    Linking.openURL(car.url);
                }}
            />
        </ItemSection>
    </Item>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: 0
    }
})

export default CarDetail