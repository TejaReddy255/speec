import React from 'react'
import { CollegeAddress, CollegeDetails, CollegeLogo, Copyright, FooterColumn, FooterContainer, FooterLogo, FooterRow, SiteName, SocialLink } from './FooterElements'
import logo from '../../images/logo.png'
import collegeLogo from '../../images/college-logo.jpeg'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const FooterSection = () => {
    return (
        
            <FooterContainer fluid>
                <FooterRow>
                    <FooterColumn sm={12} md={6} lg={3}>
                        <FooterLogo src={logo} />
                    </FooterColumn>
                    <FooterColumn sm={12} md={6} lg={5}>
                        <SiteName>Sphoorthy Electronic Election Commission
                        </SiteName>
                        <SocialLink href="https://api.whatsapp.com/message/N7VDQFACNUKGD1"><FaWhatsapp /></SocialLink>
                        <SocialLink href="https://www.instagram.com/thehearusapp/"><FaInstagram /></SocialLink>
                        <SocialLink href="https://www.linkedin.com/company/hearus/?originalSubdomain=in"><FaLinkedin /></SocialLink>
                    </FooterColumn>
                    <FooterColumn sm={12} md={6} lg={4}>
                        <CollegeDetails>
                            <CollegeLogo src={collegeLogo}/>
                            <CollegeAddress>Sagar Road,Nadargul Village, <br /> Saroornagar Mandal, <br /> 
                            Nadergul Rd, Near vanasthalipuram, <br />
                            Hyderabad, Telangana 501510 
                            </CollegeAddress>
                        </CollegeDetails>
                    </FooterColumn>
                </FooterRow>
                <Copyright>Copyright 2021-2022 <b>SPEEC</b>. All Rights Reserved. </Copyright>
            </FooterContainer>
    )
}

export default FooterSection
