import React from 'react'
import s from './CreatureFieldItemUI.module.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { ProgressBar } from 'react-bootstrap'

const CreatureFieldItemUI = ({creatureImage, feedCount, satietyCount, feedCreature, harvestImage, takeHarvestMethod, harvest, message, growTime}) => {
    const progressBarrStyle = {
        height: '0.5%',
        width: '3.8%',
        alignSelf: 'center',
        justifySelf: 'right',
        marginBottom: '23px',
        marginRight: '10px',
        position: 'absolute',
        zIndex: 3,
        transformOrigin: '100% 0',
        transform: 'rotate(-90deg)'
    }

    return (
        <div className={s.creatureFieldItem}>
            <div className={s.creature} onClick={feedCreature}><img src={creatureImage} alt={''}/></div>
            {!!harvest &&
            <div onClick={() => takeHarvestMethod()} className={s.harvest}><img src={harvestImage} alt={''}/></div>}
            {!!message && <div className={s.text} onClick={feedCreature}>
                <text>{message}</text>
            </div>}
            {!!feedCount &&
            <div class={'progress-bar'} style={progressBarrStyle}><ProgressBar now={feedCount} max={satietyCount}/></div>}
            {!!growTime && <CircularProgressbar className={s.progressBar} value={growTime} strokeWidth={15}
                                                styles={buildStyles({pathColor: '#ffd700'})}/>}
        </div>
    )
}

export default CreatureFieldItemUI