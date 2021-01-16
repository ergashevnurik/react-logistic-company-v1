import React from 'react'
import { CardData } from '../../Data/CardData';
import {
    CardSection,
    CardContainer,
    CardRow,
    CardColumn,
    Image,
    CardP
} from './CardElements';

const Card = () => {
    return (
        <CardSection>
            <CardContainer>
                <CardRow>
                    {CardData.map((card, index) => (
                        <CardColumn key={index}>
                            <Image src={card.img}/>
                            <CardP>{card.title}</CardP>
                        </CardColumn>
                    ))}
                </CardRow>
            </CardContainer>
        </CardSection>
    )
}

export default Card
