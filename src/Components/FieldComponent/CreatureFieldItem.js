import React from 'react'
import CreatureFieldItemUI from '../../UI/ItemsUI/CreatureFieldItemUI/CreatureFieldItemUI'


class CreatureFieldItem extends React.Component {
    state = {
        growTime: 0,
        hungerTime: 0,
        hunger: true,
        harvest: null
    }

    takeHarvestMethod = () => {
        this.props.takeHarvest(this.state.harvest)
        this.setState({harvest: null})
        this.creatureGrowTimer()
    }

    creatureGrowTimer = () => {
        let count = this.state.growTime
        const growTimePerPercent = this.props.creatureItem.growTime * 20,
            timerId = setInterval(
                () => {
                    count += 2
                    this.setState({growTime: count})
                    if (count === 100) {
                        clearInterval(timerId)
                        this.setState({
                            growTime: 0,
                            harvest: this.props.creatureItem.harvestType
                        })
                    }
                    if (this.state.hungerTime >= 98) {
                        clearInterval(timerId)
                    }
                }
                , growTimePerPercent
            )
    }

    hungerTimer = () => {
        let count = this.state.hungerTime
        const fullTimePerPercent = this.props.creatureItem.feedTime * 20,
            timerId = setInterval(() => {
                count += 2
                this.setState({hungerTime: count})
                if (count === 100) {
                    clearInterval(timerId)
                    this.setState({
                        hunger: true,
                        hungerTime: 0
                    })
                }
            }, fullTimePerPercent)
    }

    feedCreatureMethod = () => {
        if (this.props.feedCreature(this.props.creatureItem.feedType)) {
            this.setState({
                hunger: false
            })
            this.hungerTimer()
            this.creatureGrowTimer()
        }
    }

    componentDidMount() {
        if (!this.props.creatureItem.feedType) {
            this.setState({
                hunger: false
            })
            this.creatureGrowTimer()
    }}


    render() {
        return (
            <div>
                <CreatureFieldItemUI growTime={this.state.growTime}
                                     hunger={this.state.hunger}
                                     creatureImage={this.props.creatureItem.image}
                                     harvestImage={this.props.creatureItem.harvestImage}
                                     harvest={this.state.harvest}
                                     feedCreature={this.feedCreatureMethod}
                                     takeHarvestMethod={this.takeHarvestMethod}/>
            </div>
        )
    }
}

export default CreatureFieldItem