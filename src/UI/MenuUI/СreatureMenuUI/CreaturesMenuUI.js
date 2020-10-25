import React from 'react'
import s from './CreaturesMenuUI.module.css'
import CreatureMenuItem from '../../../Components/CreaturesComponent/CreatureMenuItem'

const CreatureMenuUI = ({creatureItems,chooseGoodsForAction,selectedCreature,chooseCreature}) => {
    return (
        <div className={s.creaturesMenuUI}>
            {Object.keys(creatureItems).map(i => <div className={s.item}>
                <CreatureMenuItem creatureItem={creatureItems[i]}
                                  chooseCreature={chooseCreature}
                                  selectedCreature={selectedCreature}
                                  chooseGoodsForAction={chooseGoodsForAction}/>
            </div>)}
        </div>
    )
}

export default CreatureMenuUI