import React from 'react'
import CreatureFieldItem from './CreatureFieldItem'

class AnimalsComponent extends CreatureFieldItem {
componentDidMount() {
    super.setState( {
            hunger: true,
            message: 'HUNGER'
        })
    }
}

export default AnimalsComponent