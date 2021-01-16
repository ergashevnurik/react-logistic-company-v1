import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const ContactSection = styled.section `
    width: 100%;
`

export const ContactContainer = styled.div `
    width: 1200px;
    margin: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
    padding: 20px;
`

export const ContactRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const ContactColumnRight = styled.div `
    width: 550px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const ContactColumnLeft = styled.div `
    width: 600px;

    @media screen and (max-width: 1200px) {
        width: 100%!important;
    }
`

export const ContactH1 = styled.h1 `
    font-size: 40px;
    color: #df9a32;
`

export const ContactP = styled.p `

`

export const ContactLink = styled(Link) `
    font-size: 32px;
    margin-right: 15px;
    text-decoration: none;
    cursor: pointer;
    color: #df9a32;
`

export const InputFirstName = styled.input `
    padding: 10px;
    width: 100%;
    margin: 5px;
    border: 3px solid #df9a32;
`

export const InputLastName = styled.input `
    padding: 10px;
    width: 100%;
    margin: 5px;
    border: 3px solid #df9a32;
`

export const InputEmail = styled.input `
    padding: 10px;
    width: 100%;
    margin: 5px;
    border: 3px solid #df9a32;
`

export const TextField = styled.textarea `
    width: 100%;
    margin: 5px;
    height: 200px;
    border: 3px solid #df9a32;
`

export const Button = styled.button `
    width: 100%;
    margin: 5px;
    padding: 10px;
    outline: none;
    border: 3px solid #df9a32;
    background: #df9a32;
    text-align: left;
`
