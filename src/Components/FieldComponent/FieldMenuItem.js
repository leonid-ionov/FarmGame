import React from 'react'
import EmptyFieldItemUI from '../../UI/ItemsUI/EmptyFieldItemUI/EmptyFieldItemUI'
import CreatureFieldItem from './CreatureFieldItem'

class FieldMenuItem extends React.Component {
    state = {renderFieldItem: null}

    checkFieldType = (type) => {
        if (type === 'empty') {
            return <EmptyFieldItemUI/>
        } else if (type === 'shovel') {
            return <EmptyFieldItemUI/>
        } else {
            return <CreatureFieldItem creatureItem={this.props.creatureItems[type]}
                                      feedCreature={this.props.feedCreature}
                                      takeHarvest={this.props.takeHarvest}
                                      id={this.props.id}/>
        }
    }

    buyCreatureMethod = () => {
        if (this.props.type === 'empty' || this.props.selectedCreature === 'shovel') {
            this.props.buyCreature(this.props.id)
        }
    }

    componentDidMount() {
        this.setState({renderFieldItem: this.checkFieldType(this.props.type)})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.setState({
                renderFieldItem: this.checkFieldType(this.props.type)
            })
        }
    }

    render() {
        return (
            <div onClick={() => this.buyCreatureMethod()}>
                {this.state.renderFieldItem}
            </div>
        )
    }
}

export default FieldMenuItem