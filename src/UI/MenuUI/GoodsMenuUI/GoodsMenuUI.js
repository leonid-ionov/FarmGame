import React from 'react'
import s from './GoodsMenuUI.module.css'
import { Button } from 'react-bootstrap'
import GoodsMenuItem from '../../../Components/GoodsComponent/GoodsMenuItem'


const GoodsMenuUI = ({sellItem, selectedGoods, chooseGoodsForAction, chooseCreature, goodsItems}) => {
    return (
        <div className={s.goodsMenu}>
            {Object.keys(goodsItems).map(i => <div className={s.item}>
                {goodsItems[i].feed && <text>FEED</text>}
                {goodsItems[i].sale && <text>SALE</text>}
                <GoodsMenuItem goodsItem={goodsItems[i]}
                               selectedGoods={selectedGoods}
                               chooseCreature={chooseCreature}
                               chooseGoodsForAction={chooseGoodsForAction}/></div>)}

            <div className={s.buttons}>
                {selectedGoods.forFeed && <Button variant="dark"
                                                  disabled={selectedGoods.forFeed} size='lg'>
                                                  {'Click on a creature cell to feed'}</Button>}
                {selectedGoods.forSale && < Button onClick={() => sellItem()}
                                                   disabled={!selectedGoods.forSale}
                                                   variant='dark' size='lg'>Sell goods</Button>}
            </div>
        </div>
    )
}

export default GoodsMenuUI