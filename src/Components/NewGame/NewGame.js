import React from 'react'
import s from './NewGame.module.css'
import FieldMenuUI from '../../UI/MenuUI/FieldMenuUI/FieldMenuUI'
import GoodsMenuUI from '../../UI/MenuUI/GoodsMenuUI/GoodsMenuUI'
import { buyCreatureChecker, feedCreatureChecker, sellItem, takeHarvest } from '../../Store/GoodsReducer'
import { connect } from 'react-redux'
import { chooseCreature, chooseGoodsForAction } from '../../Store/GameReducer'
import CreatureMenuUI from '../../UI/MenuUI/СreatureMenuUI/CreaturesMenuUI'
import { changeFieldItemType } from '../../Store/FieldReducer'
import { Badge } from 'react-bootstrap'

class NewGame extends React.Component {
    state = {error: null}
    sellItem = () => {
        if (this.props.selectedGoods.forSale) {
            this.props.sellItem(this.props.selectedGoods.type)
            this.props.chooseGoodsForAction(null, false, false)
        }
    }

    buyCreature = (id) => {
        if (!!this.props.selectedCreature) {
            try {
                this.props.buyCreatureChecker(this.props.selectedCreature)
                if (this.props.selectedCreature === 'shovel') {
                    this.props.changeFieldItemType(id, 'empty')
                } else {
                    this.props.changeFieldItemType(id, this.props.selectedCreature)
                }
            } catch (error) {
                this.setState({error: error.message})
                this.props.chooseCreature(null)
            }
        }
    }

    feedCreatureMethod = (feedType) => {
        if (this.props.selectedGoods.forFeed && feedType === this.props.selectedGoods.type) {
            try {
                this.props.feedCreatureChecker(feedType)
                return true
            } catch (error) {
                this.setState({error: error.message})
                this.props.chooseGoodsForAction(null, false, false)
                return false
            }
        } else {
            this.setState({error: 'Choose feed'})
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
                <div className={s.error}><Badge variant="warning"><h4>{this.state.error}</h4></Badge></div>}
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
        sellItem, buyCreatureChecker,
        chooseGoodsForAction, changeFieldItemType, chooseCreature,
        takeHarvest, feedCreatureChecker
    }
export default connect(mapStateToProps, actionCreators)(NewGame)