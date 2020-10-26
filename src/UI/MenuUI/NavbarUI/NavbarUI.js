import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Logo from '../../../Assets/Images/Menu/Logo.png'
import NameImage from '../../../Assets/Images/Menu/Name.png'

const NavbarUI = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                     alt={''}/>{' '}
                </Navbar.Brand>
                <img src={NameImage} width="222"
                     height="50" alt={''}/>
                <Nav.Item className="mr-auto">
                    <Nav.Link as={NavLink} to={'/main-menu'}>
                        <h4 style={{color:'darkgrey'}}>Main Menu</h4>
                    </Nav.Link>
                </Nav.Item>
            </Navbar>
        </div>
    )
}

export default NavbarUI