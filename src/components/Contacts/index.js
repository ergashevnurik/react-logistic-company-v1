import React from 'react'
import {
    ContactSection,
    ContactContainer,
    ContactRow,
    ContactColumnLeft,
    ContactColumnRight,
    ContactH1,
    ContactP,
    InputFirstName,
    InputLastName,
    InputEmail,
    TextField,
    Button,
    ContactLink
} from './ContactsElements'

import {FaFacebook, FaInstagram, FaPinterest, FaTwitter} from 'react-icons/fa'

const Contacts = ({h1, p, buttonLabel}) => {
    return (
        <ContactSection>
            <ContactContainer>
                <ContactRow>
                    <ContactColumnLeft>
                        <ContactH1>{h1}</ContactH1>
                        <ContactP>{p}</ContactP>
                        <br />
                        <ContactP>{p}</ContactP>
                        <br />
                        <ContactLink><FaFacebook to="/" /></ContactLink>
                        <ContactLink><FaInstagram to="/" /></ContactLink>
                        <ContactLink><FaPinterest to="/" /></ContactLink>
                        <ContactLink><FaTwitter to="/" /></ContactLink>
                        <ContactP>{p}</ContactP>
                    </ContactColumnLeft>
                    <ContactColumnRight>
                        <InputFirstName></InputFirstName>
                        <InputLastName></InputLastName>
                        <InputEmail></InputEmail>
                        <TextField></TextField>
                        <Button>
                            {buttonLabel}
                        </Button>
                    </ContactColumnRight>
                </ContactRow>
            </ContactContainer>
        </ContactSection>
    )
}

export default Contacts
