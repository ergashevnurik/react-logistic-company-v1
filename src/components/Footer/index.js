import React from 'react'
import { FooterData } from '../../Data/FooterData'
import {
    FooterSection,
    FooterContainer,
    FooterRow,
    FooterColumn,
    FooterUnOrderedList,
    FooterListItem,
    FooterLink,
    FooterH1
} from './FooterElements'

const Footer = () => {
    return (
        <FooterSection>
            <FooterContainer>
                <FooterRow>
                    <FooterColumn>
                        <FooterH1></FooterH1>
                        <FooterUnOrderedList>
                            {FooterData.map((footer, index) => (
                                <FooterListItem key={index}>
                                    <FooterLink to={footer.link}>{footer.title}</FooterLink>
                                </FooterListItem>
                            ))}
                        </FooterUnOrderedList>
                    </FooterColumn>
                </FooterRow>
            </FooterContainer>
        </FooterSection>
    )
}

export default Footer
