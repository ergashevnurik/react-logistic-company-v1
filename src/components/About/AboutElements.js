import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const AboutSection = styled.section `
    width: 100%;
    background: #2a2f32;
`

export const AboutContainer = styled.div `
    width: 1200px;
    margin: auto;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const AboutRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const AboutColumnLeft = styled.div `
    width: 500px;
    color: white;
    order: 2;

    @media screen and (max-width: 1200px) {
        order: 1;
        width: 100%;
    }
`

export const AboutColumnRight = styled.div `
    width: 650px;
    color: white;
    order: 1;

    @media screen and (max-width: 1200px) {
        order: 2;
        width: 100%;
    }
`

export const Image = styled.img `
    width: 100%;
    height: 100%;
`

export const AboutSpan = styled.span `
    letter-spacing: 10px;
    text-transform: uppercase;
    font-size: 10px;
    margin-bottom: 20px;
`

export const AboutH1 = styled.h1 `
    letter-spacing: 2.5px;
    font-weight: 800;
    line-height: 1.1;
    font-size: 40px;
    color: #df9a32;
    margin-bottom: 10px;
`

export const AboutP = styled.p `
    font-size: 18px;
    margin-bottom: 30px;
`

export const Button = styled(Link) `
    text-decoration: none;
    color: white;
    padding: 12px 20px;
    border: 2px solid white;
    transition: all .6s ease-in-out;

    &:hover {
        background: #df9a32;
        border: 2px solid #df9a32;
        color: black;
    }

`