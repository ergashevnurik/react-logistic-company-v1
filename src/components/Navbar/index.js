import React from 'react'
import { NavbarData } from '../../Data/NavbarData'
import {
    NavbarNav,
    NavbarContainer,
    NavbarLogo,
    NavbarUnOrderedList,
    NavbarListItem,
    NavbarLink
} from './NavbarElements';

const Navbar = () => {
    return (
        <NavbarNav>
            <NavbarContainer>
                <NavbarLogo>Logo</NavbarLogo>
                <NavbarUnOrderedList>
                    {NavbarData.map((navbar, index) => (
                        <NavbarListItem key={index}>
                            <NavbarLink to={navbar.link}>{navbar.title}</NavbarLink>
                        </NavbarListItem>
                    ))}
                </NavbarUnOrderedList>
            </NavbarContainer>
        </NavbarNav>
    )
}

export default Navbar
