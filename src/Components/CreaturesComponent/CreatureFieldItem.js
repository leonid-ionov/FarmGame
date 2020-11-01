import React from 'react'
import CreatureFieldItemUI from '../../UI/ItemsUI/CreatureFieldItemUI/CreatureFieldItemUI'


class CreatureFieldItem extends React.Component {
    state = {
        growTime: 0,
        feedCount: 0,
        hunger: false,
        message: '',
        harvest: null
    }

    creatureMessages (text) {
        this.setState({message: text})
        setTimeout(() => {
            this.setState({
                message: ''
            })
        }, 1000)
    }

    takeHarvestMethod () {
        this.props.takeHarvest(this.state.harvest)
        this.setState({harvest: null})
        if (!this.state.hunger) {
            this.creatureGrowTimer()
        }
    }

    creatureGrowTimer () {
        let count = this.state.growTime
        const growTimePerPercent = this.props.creatureItem.growTime * 20,
            timerId = setInterval(
                () => {
                    count += 2
                    this.setState({growTime: count})
                    if (count >= 98) {
                        clearInterval(timerId)
                        this.setState({
                            growTime: 0,
                            harvest: this.props.creatureItem.harvestType
                        })
                    }
                    if (this.state.hunger) {
                        clearInterval(timerId)
                        this.setState({growTime: 0})
                    }
                }
                , growTimePerPercent
            )
    }

    hungerTimer () {
        const fullTimePerPercent = this.props.creatureItem.feedTime * 1000,
            timerId = setInterval(() => {
                this.setState({
                    feedCount: this.state.feedCount - 1
                })
                if (this.state.feedCount === 0) {
                    clearInterval(timerId)
                    this.setState({
                        hunger: true,
                        message: 'HUNGER'
                    })
                }
            }, fullTimePerPercent)
    }

    feedCreatureMethod () {
        if (this.state.feedCount === this.props.creatureItem.satietyCount) {
            this.creatureMessages('I\'M FOOL')
        } else if (this.props.feedCreature(this.props.creatureItem.feedType)) {
            this.creatureMessages('YUMMY')
            this.setState({feedCount:this.state.feedCount+1})
            if (this.state.hunger) {
                this.setState({
                    hunger: false,
                })
                this.hungerTimer()
                if (!this.state.harvest) {
                    this.creatureGrowTimer()
                }
            }
        }
    }


    render() {
        return (
            <div>
                <CreatureFieldItemUI growTime={this.state.growTime}
                                     message={this.state.message}
                                     feedCount={this.state.feedCount}
                                     satietyCount={this.props.creatureItem.satietyCount}
                                     creatureImage={this.props.creatureItem.image}
                                     harvestImage={this.props.creatureItem.harvestImage}
                                     harvest={this.state.harvest}
                                     feedCreature={this.feedCreatureMethod.bind(this)}
                                     takeHarvestMethod={this.takeHarvestMethod.bind(this)}/>
            </div>
        )
    }
}

export default CreatureFieldItem