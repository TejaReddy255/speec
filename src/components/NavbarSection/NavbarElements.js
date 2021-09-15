import { Button } from 'react-bootstrap';
import styled from  'styled-components';

export const NavbarContainer = styled.div`
    max-height: 90px;
    background-color: #FCF8E8;
    margin: 0;
    padding: 0; 
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
`

export const NavbarLogoContainer = styled.div`
    width: 200px;
    padding-left: 20px;
    height: 80px;
    margin-right: 20px;
    display: inline-block;
    text-align: center;
`

export const NavbarLogo = styled.img`
    width: 100%;
    height: 100%;
`

export const NavbarLinksContainer = styled.div`
    float: right;
    width: 300px;
    height: 80px;
    text-align: center;
`

export const NavbarLoginButton = styled(Button)`
    width: 120px;
    margin: 25px 20px;
    height: 40px;
    background-color: #DF7861;
    color: #F6F6F6;
    border: none;
    outline: none;
    font-size: 15px;
    font-weight: 900;
    border-radius: 20px;
    font-family: 'Montserrat';
`

export const NavbarRegisterButton = styled(Button)`
    width: 120px;
    margin: 25px 20px 25px 0px;
    height: 40px;
    background-color: #DF7861;
    color: #F6F6F6;
    border: none;
    outline: none;
    font-size: 15px;
    font-weight: 900;
    border-radius: 20px;
    font-family: 'Montserrat';
`