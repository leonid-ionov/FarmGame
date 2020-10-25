import React from 'react'
import s from './CreatureFieldItemUI.module.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const CreatureFieldItemUI = ({creatureImage,feedCreature, takeHarvestMethod,hunger, increased, growTime}) => {
    return (
        <div className={s.creatureFieldItem}>
            <img src={creatureImage} alt={''}/>
            {hunger ? <div className={s.hunger} onClick={feedCreature}>{'Hunger!'}</div> :
                increased ? <div onClick={()=>takeHarvestMethod()} className={s.harvest}>HarvestImage</div> :
                <CircularProgressbar value={growTime}
                                     styles={buildStyles({trailColor: 'white', pathColor: 'black'})}/>}
        </div>
    )
}

export default CreatureFieldItemUI