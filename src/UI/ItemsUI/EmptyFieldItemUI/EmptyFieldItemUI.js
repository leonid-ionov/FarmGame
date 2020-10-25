import React from 'react'
import Ground from '../../../Assets/Images/Menu/Grass.jpg'
import s from './EmptyFieldItemUI.module.css'

function EmptyFieldItemUI() {
    return (
        <div className={ s.emptyFieldItem}>
            <img src={Ground} alt={''}/>
        </div>
    )
}

export default EmptyFieldItemUI