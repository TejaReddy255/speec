import React from 'react'
import { NavbarContainer, NavbarLinksContainer,
    NavbarLoginButton, NavbarLogo,
    NavbarLogoContainer, NavbarRegisterButton } from './NavbarElements'
import logo from '../../images/logo.png';


const NavbarSection = () => {
    return (
        <>
            <NavbarContainer>
                <NavbarLogoContainer>
                    <NavbarLogo src={logo} />
                </NavbarLogoContainer>
                <NavbarLinksContainer>
                    <NavbarLoginButton>Login</NavbarLoginButton>
                    <NavbarRegisterButton>Register</NavbarRegisterButton>
                </NavbarLinksContainer>
            </NavbarContainer>
        </>
    )
}

export default NavbarSection
