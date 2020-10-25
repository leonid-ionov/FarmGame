import React from 'react'
import s from './FieldMenuUI.module.css'
import FieldMenuItem from '../../../Components/FieldComponent/FieldMenuItem'

function FieldMenuUI({fieldItems, selectedCreature,feedCreature, takeHarvest, buyCreature,creatureItems, changeFieldItemType}) {
    return (
        <div className={s.field}>
            {fieldItems.map(i => <div className={s.item}>
                <FieldMenuItem selectedCreature={selectedCreature}
                               buyCreature={buyCreature}
                               creatureItems={creatureItems}
                               changeFieldItemType={changeFieldItemType}
                               takeHarvest={takeHarvest}
                               feedCreature={feedCreature}
                               id={i.id}
                               type={i.type}/>
            </div>)}
        </div>
    )
}

export default FieldMenuUI