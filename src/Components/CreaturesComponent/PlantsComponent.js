import React from 'react'
import CreatureFieldItem from './CreatureFieldItem'

class PlantsComponent extends CreatureFieldItem {
    componentDidMount() {
        super.creatureGrowTimer()
    }
    feedCreatureMethod = () => {
    }
}

export default PlantsComponent