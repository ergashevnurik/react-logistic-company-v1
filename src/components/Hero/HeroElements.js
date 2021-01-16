import styled from 'styled-components'

export const HeroSection = styled.section `
    width: 100%;
`

export const HeroContainer = styled.div `
    width: 1200px;
    margin: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

`

export const HeroRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const HeroColumnLeft = styled.div `
    margin: 5px;
    width: 500px;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
    padding: 10px;
`

export const HeroColumnRight = styled.div `
    margin: 5px;
    width: 650px;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

`

export const Image = styled.img `
    width: 100%;
    height: 100%;
`

export const HeroSpan = styled.span `
    letter-spacing: 10px;
    text-transform: uppercase;
    font-size: 10px;
    color: #df9a32;
`

export const HeroH1 = styled.h1 `
    font-size: clamp(1.5rem, 100vw, 3.2rem);
    letter-spacing: 2.5px;
    font-weight: 800;
    line-height: 1.1;
`

export const HeroP = styled.p `

`