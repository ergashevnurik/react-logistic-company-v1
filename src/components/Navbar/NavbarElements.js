import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarNav = styled.nav `
    width: 100%;
    background: white;
    box-shadow: 0 4px 4px #df9a32;
`

export const NavbarContainer = styled.div `
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
    margin: auto;
`

export const NavbarLogo = styled(Link) `
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    font-size: 30px;
`

export const NavbarUnOrderedList = styled.ul `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    list-style: none;
    padding: 20px;
`

export const NavbarListItem = styled.li `

`

export const NavbarLink = styled(Link) `
    text-decoration: none;
    color: black;
    padding: 12px 20px;
`
