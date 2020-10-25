import React from 'react'
import './App.css'
import MainMenuUI from './UI/MenuUI/MainMenuUI/MainMenuUI'
import { Route, useHistory } from 'react-router'
import NavbarUI from './UI/MenuUI/NavbarUI/NavbarUI'
import NewGame from './Components/NewGame/NewGame'
import { startNewGame } from './Store/Store'
import { connect } from 'react-redux'

const App = ({startNewGame}) => {
    const {push} = useHistory(),
    startNewGameFunction = () => {
        startNewGame()
        push('/new-game')
    }

    return (
        <div className="app-wrapper">
            <div className={'app-wrapper-nav'}><NavbarUI/></div>
            <div className={'app-wrapper-content'}>
                <Route path={'/main-menu'} render={() => <MainMenuUI startNewGame={startNewGameFunction}/>}/>
                <Route path={'/new-game'} render={() => <NewGame/>}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({}),
    actionCreators = {startNewGame}

export default connect(mapStateToProps, actionCreators)(App)
