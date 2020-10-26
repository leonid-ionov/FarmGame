import React from 'react'
import s from './CreatureFieldItemUI.module.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const CreatureFieldItemUI = ({creatureImage, feedCreature, harvestImage, takeHarvestMethod, harvest, message, growTime}) => {
    return (
        <div className={s.creatureFieldItem}>
            <div className={s.creature} onClick={feedCreature}><img src={creatureImage} alt={''}/></div>
            {!!harvest ?
                <div onClick={() => takeHarvestMethod()} className={s.harvest}><img src={harvestImage} alt={''}/></div> :
                    message ? <div className={s.text} onClick={feedCreature}>{message}</div> :
                    <CircularProgressbar className={s.progressBar} value={growTime}
                                         styles={buildStyles({pathColor: '#ffd700'})}/>}
        </div>
    )
}

export default CreatureFieldItemUI