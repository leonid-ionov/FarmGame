import * as React from 'react'
import s from './GoodsItemUI.module.css'
import { Image } from 'react-bootstrap'

function GoodsItemUI({goodsImage, goodsName, description, goodsCount, itemSelected, goodsPrice}) {
    return (
        <div className={s.goodsItem}
             style={itemSelected === goodsName ? {border: '5px solid darkred'} : {border: '5px solid black'}}>
            <Image className={s.goods} src={goodsImage}/>
            <div className={s.text}>
                {!!description ? <h6>{`${description}`}</h6> :
                    <h6>{`COUNT: ${goodsCount}`}</h6>}
                {!!goodsPrice && <h6>{`PRICE: ${goodsPrice}`}</h6>}
            </div>
        </div>
    )
}

export default GoodsItemUI
