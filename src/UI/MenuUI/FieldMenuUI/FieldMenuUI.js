import React from 'react'
import s from './FieldMenuUI.module.css'
import FieldMenuItem from '../../../Components/FieldComponent/FieldMenuItem'

function FieldMenuUI({fieldItems, selectedCreature, feedCreature, takeHarvest, deleteCreatureFromField, buyCreature, creatureItems, changeFieldItemType}) {
    return (
        <div className={s.field}>
            {fieldItems.map(i => <div key={i.id} className={s.item}>
                <FieldMenuItem selectedCreature={selectedCreature}
                               deleteCreatureFromField={deleteCreatureFromField}
                               buyCreature={buyCreature}
                               creatureItems={creatureItems}
                               changeFieldItemType={changeFieldItemType}
                               takeHarvest={takeHarvest}
                               feedCreature={feedCreature}
                               id={i.id}
                               type={i.type}
                               name={i.name}/>
            </div>)}
        </div>
    )
}

export default FieldMenuUI