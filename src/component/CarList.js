import React from 'react'
import { ScrollView } from 'react-native'
import { carList } from '../Data/carData'

import CarDetail from './CarDetail'

const CarList = () => {

    const renderList = () => {
        return carList.map((cars) => {
            return cars.model.map((car) => {
                return <CarDetail key={car.name} car={car} />
            })
        })
    }

  return (
    <ScrollView style={{ margin: 15 }}>
        {renderList()}
    </ScrollView>
  )
}

export default CarList