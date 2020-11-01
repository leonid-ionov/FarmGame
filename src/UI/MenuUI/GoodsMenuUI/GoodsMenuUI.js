import React from 'react'
import s from './GoodsMenuUI.module.css'
import { Button } from 'react-bootstrap'
import GoodsMenuItem from '../../../Components/GoodsComponent/GoodsMenuItem'


const GoodsMenuUI = ({sellItem, selectedGoods, chooseGoodsForAction, chooseCreature, goodsItems}) => {
    return (
        <div className={s.goodsMenu}>
            {Object.keys(goodsItems).map(i => <div className={s.item}>
                <div className={s.text}>{goodsItems[i].type}</div>
                <GoodsMenuItem goodsItem={goodsItems[i]}
                               selectedGoods={selectedGoods}
                               chooseCreature={chooseCreature}
                               chooseGoodsForAction={chooseGoodsForAction}/></div>)}
            <div className={s.buttons}>
                {selectedGoods.type === 'feed' && <Button variant="dark"
                                                  disabled={selectedGoods.forFeed} size='lg'>
                    {'Click on a creature to feed'}</Button>}
                {selectedGoods.type === 'sale' && < Button onClick={() => sellItem()}
                                                   variant='dark' size='lg'>Sell goods</Button>}
            </div>
        </div>
    )
}

export default GoodsMenuUI