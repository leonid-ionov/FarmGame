import React from 'react'
import GoodsItemUI from '../../UI/ItemsUI/GoodsItemUI/GoodsItemUI'

class GoodsMenuItem extends React.Component {
    selectGoodsMethod = () => {
        if (this.props.goodsItem.feed || this.props.goodsItem.sale) {
            this.props.chooseGoodsForAction(this.props.goodsItem.type,this.props.goodsItem.feed,this.props.goodsItem.sale)
            this.props.chooseCreature(null)
        }
    }
    render() {
        return (
            <div onClick={this.selectGoodsMethod}>
                <GoodsItemUI itemSelected={this.props.selectedGoods.type}
                             goodsType={this.props.goodsItem.type}
                             goodsImage={this.props.goodsItem.image}
                             goodsCount={this.props.goodsItem.count}
                             goodsPrice={this.props.goodsItem.price}/>
            </div>
        )
    }
}

export default GoodsMenuItem