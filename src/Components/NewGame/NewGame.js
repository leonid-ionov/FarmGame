import React from 'react'
import s from './NewGame.module.css'
import FieldMenuUI from '../../UI/MenuUI/FieldMenuUI/FieldMenuUI'
import GoodsMenuUI from '../../UI/MenuUI/GoodsMenuUI/GoodsMenuUI'
import {
    buyCreatureChecker,
    feedCreatureChecker,
    sellItemChecker,
    takeHarvest
} from '../../Store/GoodsReducer'
import { connect } from 'react-redux'
import { chooseCreature, chooseGoodsForAction } from '../../Store/GameReducer'
import CreatureMenuUI from '../../UI/MenuUI/СreatureMenuUI/CreaturesMenuUI'
import { changeFieldItemType } from '../../Store/FieldReducer'
import { Badge } from 'react-bootstrap'

class NewGame extends React.Component {
    state = {error: null}
    sellItem = () => {
        try {
            this.props.sellItemChecker(this.props.selectedGoods.name)
        } catch (error) {
            this.setState({error: error.message})
        }
        this.props.chooseGoodsForAction(null, false, false)
    }

    buyCreature = (id) => {
        try {
            this.props.buyCreatureChecker(this.props.selectedCreature.name)
            this.props.changeFieldItemType(id, this.props.selectedCreature)
        } catch (error) {
            this.setState({error: error.message})
            this.props.chooseCreature(null, null)
        }
    }

    deleteCreatureFromField = (id) => {
        if (this.props.selectedGoods.type === 'shovel') {
            this.props.changeFieldItemType(id, {type: 'empty', name: null})
        }
    }

    feedCreatureMethod = (feedType) => {
        if (this.props.selectedGoods.type === 'feed' && feedType === this.props.selectedGoods.name) {
            try {
                this.props.feedCreatureChecker(feedType)
                return true
            } catch (error) {
                this.setState({error: error.message})
                this.props.chooseGoodsForAction(null, null)
                return false
            }
        } else if (this.props.selectedGoods.type !== 'shovel') {
            this.setState({error: 'CHOOSE FEED'})
            return false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.error !== this.state.error) {
            setTimeout(() => {
                this.setState({error: null})
            }, 3000)
        }
    }

    render() {
        return (
            <div className={s.newGame}>
                <div className={s.creaturesMenu}>
                    <CreatureMenuUI creatureItems={this.props.creatureItems}
                                    selectedCreature={this.props.selectedCreature}
                                    chooseCreature={this.props.chooseCreature}
                                    chooseGoodsForAction={this.props.chooseGoodsForAction}/>
                </div>
                <div className={s.field}>
                    <FieldMenuUI selectedCreature={this.props.selectedCreature}
                                 deleteCreatureFromField={this.deleteCreatureFromField}
                                 creatureItems={this.props.creatureItems}
                                 buyCreature={this.buyCreature.bind(this)}
                                 fieldItems={this.props.fieldItems}
                                 changeFieldItemType={this.props.changeFieldItemType}
                                 takeHarvest={this.props.takeHarvest}
                                 feedCreature={this.feedCreatureMethod.bind(this)}/>
                </div>
                <div className={s.goodsMenu}>
                    <GoodsMenuUI sellItem={this.sellItem.bind(this)}
                                 selectedGoods={this.props.selectedGoods}
                                 goodsItems={this.props.goodsItems}
                                 chooseGoodsForAction={this.props.chooseGoodsForAction}
                                 chooseCreature={this.props.chooseCreature}/>
                </div>
                {this.state.error &&
                <div className={s.error}><Badge variant="danger"><h4>{this.state.error}</h4></Badge></div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        selectedGoods: state.gameReducer.selectedGoods,
        fieldItems: state.fieldReducer.field,
        selectedCreature: state.gameReducer.selectedCreature,
        goodsItems: state.goodsReducer,
        creatureItems: state.creaturesReducer
    }),
    actionCreators = {
        sellItemChecker, buyCreatureChecker,
        chooseGoodsForAction, changeFieldItemType, chooseCreature,
        takeHarvest, feedCreatureChecker
    }
export default connect(mapStateToProps, actionCreators)(NewGame)