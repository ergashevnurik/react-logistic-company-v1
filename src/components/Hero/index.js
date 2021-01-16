import React from 'react'
import {
    HeroSection,
    HeroContainer,
    HeroRow,
    HeroColumnLeft,
    HeroColumnRight,
    HeroSpan,
    HeroH1,
    HeroP,
    Image
} from './HeroElements';
import ImageBg from '../../images/hero_bg.jpg'

const Hero = ({span, h1, p}) => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroRow>
                    <HeroColumnLeft>
                        <HeroSpan>{span}</HeroSpan>
                        <HeroH1>{h1}</HeroH1>
                        <HeroP>{p}</HeroP>
                    </HeroColumnLeft>
                    <HeroColumnRight>
                        <Image src={ImageBg} />
                    </HeroColumnRight>
                </HeroRow>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero
