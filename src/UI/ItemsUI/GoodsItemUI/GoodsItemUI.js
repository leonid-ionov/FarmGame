import * as React from 'react'
import s from './GoodsItemUI.module.css'
import { Image } from 'react-bootstrap'

function GoodsItemUI({goodsImage, goodsType, goodsCount, itemSelected, goodsPrice}) {
    return (
        <div className={s.goodsItem}
             style={itemSelected === goodsType ? {border: '5px solid darkred'} : {border: '5px solid black'}}>
            <Image className={s.goods} src={goodsImage}/>
            <div className={s.text}>
                <h5>
                    {`Count: ${goodsCount}`}
                </h5>
                {!!goodsPrice && <h5>
                    {`Price: ${goodsPrice}`}
                </h5>}
            </div>
        </div>
    )
}

export default GoodsItemUI
