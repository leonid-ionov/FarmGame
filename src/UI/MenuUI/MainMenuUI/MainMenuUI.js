import React from 'react'
import s from './MainMenuUI.module.css'
import { Button, Image } from 'react-bootstrap'
import MainMenuImg from '../../../Assets/Images/Menu/MainMenuImg.jpg'

const MainMenuUI = ({startNewGame}) => {
    return (
        <div className={s.mainMenuUI}>
            <Image src={MainMenuImg}/>
            <Button variant="dark" size="lg" onClick={() => startNewGame()}>New Game</Button>
        </div>
    )
}

export default MainMenuUI