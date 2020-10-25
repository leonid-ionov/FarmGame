import React from 'react'
import CreatureItem from '../../UI/ItemsUI/CreatureItemUI/CreatureItemUI'

class CreatureMenuItem extends React.Component {
    chooseCreatureMethod = () => {
        this.props.chooseCreature(this.props.creatureItem.type)
        this.props.chooseGoodsForAction(null, false, false)
    }

    render() {
        return (
            <div onClick={this.chooseCreatureMethod}>
                <CreatureItem creaturesImage={this.props.creatureItem.image}
                              creatureType={this.props.creatureItem.type}
                              selectedCreature={this.props.selectedCreature}
                              creaturePrice={this.props.creatureItem.price}/>
            </div>
        )
    }
}

export default CreatureMenuItem