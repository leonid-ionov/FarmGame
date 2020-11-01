import React from 'react'
import GoodsItemUI from '../../UI/ItemsUI/GoodsItemUI/GoodsItemUI'

class GoodsMenuItem extends React.Component {
    selectGoodsMethod = () => {
        if (this.props.goodsItem.type !== 'money') {
            this.props.chooseGoodsForAction(this.props.goodsItem.type,this.props.goodsItem.name)
            this.props.chooseCreature(null,null)
        }
    }
    render() {
        return (
            <div onClick={this.selectGoodsMethod}>
                <GoodsItemUI itemSelected={this.props.selectedGoods.name}
                             description={this.props.goodsItem.description}
                             goodsName={this.props.goodsItem.name}
                             goodsImage={this.props.goodsItem.image}
                             goodsCount={this.props.goodsItem.count}
                             goodsPrice={this.props.goodsItem.price}/>
            </div>
        )
    }
}

export default GoodsMenuItem