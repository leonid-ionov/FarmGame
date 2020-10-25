import React from 'react'
import CreatureFieldItemUI from '../../UI/ItemsUI/CreatureFieldItemUI/CreatureFieldItemUI'


class CreatureFieldItem extends React.Component {
    state = {
        growTime: 0,
        hunger: false,
        increased: false,
        harvest: null
    }

    takeHarvestMethod = () => {
        this.props.takeHarvest(this.state.harvest)
        this.setState({increased: false})
    }

    creatureGrow = () => {
        let growTimePerPercent = this.props.creatureItem.growTime * 20,
            count = this.state.growTime,
            fullTime = this.props.creatureItem.feedTime * 1000
        const creatureGrowTimer = setInterval(
            () => {
                count += 2
                this.setState({growTime: count})
                if (count === 100) {
                    clearInterval(creatureGrowTimer)
                    this.setState({
                        growTime: 0,
                        increased: true
                    })
                }
            }
            , growTimePerPercent
        )
        if (!!this.props.creatureItem.feedType) {
            setTimeout(() => {
                clearInterval(creatureGrowTimer)
                this.setState({
                    hunger: true
                })
            }, fullTime)
        }
    }

    feedCreatureMethod = () => {
        if (this.props.feedCreature(this.props.creatureItem.feedType)) {
            this.setState({hunger: false})
        }
    }

    componentDidMount() {
        if (!!this.props.creatureItem.feedType) {
            this.setState({hunger: true})
        } else {
            this.creatureGrow()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.increased !== this.state.increased) {
            if (this.state.increased) {
                this.setState({harvest: this.props.creatureItem.harvestType})
            } else if (!this.state.increased) {
                this.creatureGrow()
            }
        }
        if (prevState.hunger !== this.state.hunger) {
            if (!this.state.hunger) {
                this.creatureGrow()
            }
        }
    }

    render() {
        return (
            <div>
                <CreatureFieldItemUI growTime={this.state.growTime}
                                     hunger={this.state.hunger}
                                     creatureImage={this.props.creatureItem.image}
                                     increased={this.state.increased}
                                     feedCreature={this.feedCreatureMethod}
                                     takeHarvestMethod={this.takeHarvestMethod}/>
            </div>
        )
    }
}

export default CreatureFieldItem