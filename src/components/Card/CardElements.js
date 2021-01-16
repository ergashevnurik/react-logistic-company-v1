import styled from 'styled-components'

export const CardSection = styled.section `
    width: 100%;
    background: #df9a32;
`

export const CardContainer = styled.div `
    width: 1200px;
    margin: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const CardRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
`

export const CardColumn = styled.div `
    width: 250px;
    margin: 5px;

    border: 5px solid #2a2f32;
    padding: 10px;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    transition: all .3s ease-in-out;

    &:hover {
        transform: scale(1.01);
    }
`

export const Image = styled.img `
    width: 70%;
    height: 50%;
`

export const CardP = styled.p `
    letter-spacing: 6px;
    font-weight: 800;
    text-transform: uppercase;
`