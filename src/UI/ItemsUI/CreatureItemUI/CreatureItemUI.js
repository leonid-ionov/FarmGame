import * as React from 'react'
import s from './CreatureItemUI.module.css'
import { Image } from 'react-bootstrap'

function CreatureItemUI({creaturesImage, creatureName, creaturePrice, selectedCreature}) {
    return (
        <div className={s.creatureItem}
             style={creatureName === selectedCreature.name ? {border: '5px solid darkred'} : {border: '5px solid black'}}>
            <Image className={s.creature} src={creaturesImage}/>
            <div className={s.text}>
                {!!creaturePrice ? <h6> {`PRICE: ${creaturePrice}`}</h6> :
                    <h6>REMOVE A CREATURE</h6>}
            </div>
        </div>
    )
}

export default CreatureItemUI