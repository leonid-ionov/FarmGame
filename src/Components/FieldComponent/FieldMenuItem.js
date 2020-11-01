import React from 'react'
import EmptyFieldItemUI from '../../UI/ItemsUI/EmptyFieldItemUI/EmptyFieldItemUI'
import PlantsComponent from '../CreaturesComponent/PlantsComponent'
import AnimalsComponent from '../CreaturesComponent/AnimalsComponent'

class FieldMenuItem extends React.Component {
    state = {renderFieldItem: null}

    checkFieldType = (type, name) => {
        switch (type) {
            case 'plant' :
                return <PlantsComponent creatureItem={this.props.creatureItems[name]}
                                        takeHarvest={this.props.takeHarvest}
                                        id={this.props.id}/>
            case 'animal' :
                return <AnimalsComponent creatureItem={this.props.creatureItems[name]}
                                         feedCreature={this.props.feedCreature}
                                         takeHarvest={this.props.takeHarvest}
                                         id={this.props.id}/>
            default :
                return <EmptyFieldItemUI/>
        }
    }

    changeField = () => {
        if (this.props.type === 'empty') {
            this.props.buyCreature(this.props.id)
        } else {
            this.props.deleteCreatureFromField(this.props.id)
        }
    }

    componentDidMount() {
        this.setState({renderFieldItem: this.checkFieldType(this.props.type, this.props.name)})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.setState({
                renderFieldItem: this.checkFieldType(this.props.type, this.props.name)
            })
        }
    }

    render() {
        return (
            <div onClick={() => this.changeField()}>
                {this.state.renderFieldItem}
            </div>
        )
    }
}

export default FieldMenuItem