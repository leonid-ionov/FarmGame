import * as React from 'react'
import s from './CreatureItemUI.module.css'
import { Image } from 'react-bootstrap'

function CreatureItemUI({creaturesImage, creatureType, creaturePrice, selectedCreature}) {
    return (
        <div className={s.creatureItem}
             style={creatureType === selectedCreature ? {border: '5px solid darkred'} : {border: '5px solid black'}}>
            <Image className={s.creature} src={creaturesImage}/>
            <div className={s.text}>
                {!!selectedCreature ? <h7>{'Touch field item to buy or remove'}</h7> :
                !!creaturePrice ? <h6> {`Price: ${creaturePrice}`}</h6> :
                    <h6>Remove creature</h6>}
            </div>
        </div>
    )
}

export default CreatureItemUI