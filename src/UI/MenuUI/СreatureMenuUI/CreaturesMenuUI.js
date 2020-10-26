import React from 'react'
import s from './CreaturesMenuUI.module.css'
import CreatureMenuItem from '../../../Components/CreaturesComponent/CreatureMenuItem'
import { Button } from 'react-bootstrap'

const CreatureMenuUI = ({creatureItems, chooseGoodsForAction, selectedCreature, chooseCreature}) => {
    return (
        <div className={s.creaturesMenuUI}>
            {Object.keys(creatureItems).map(i => <div className={s.item}>
                <CreatureMenuItem creatureItem={creatureItems[i]}
                                  chooseCreature={chooseCreature}
                                  selectedCreature={selectedCreature}
                                  chooseGoodsForAction={chooseGoodsForAction}/>
            </div>)}
            {!!selectedCreature &&
            <div style={{width: '210px'}}>
                <Button variant="dark" disabled={true} size='lg'>
                    Tap into field cell to buy or remove creature
                </Button>
            </div>}
        </div>
    )
}

export default CreatureMenuUI