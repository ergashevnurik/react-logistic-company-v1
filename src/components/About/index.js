import React from 'react'
import {
    AboutSection,
    AboutContainer,
    AboutRow,
    AboutColumnLeft,
    AboutColumnRight,
    AboutSpan,
    AboutH1,
    AboutP,
    Image,
    Button
} from './AboutElements'
import ImageBox from '../../images/box.png'

const About = ({span,h1,p,link,buttonLabel}) => {
    return (
        <AboutSection>
            <AboutContainer>
                <AboutRow>
                    <AboutColumnLeft>
                        <AboutSpan>{span}</AboutSpan>
                        <AboutH1>{h1}</AboutH1>
                        <AboutP>{p}</AboutP>
                        <Button to={link}>{buttonLabel}</Button>
                    </AboutColumnLeft>
                    <AboutColumnRight>
                        <Image src={ImageBox} />
                    </AboutColumnRight>
                </AboutRow>
            </AboutContainer>
        </AboutSection>
    )
}

export default About
