import React from 'react';
import  {
    HeaderContainer,
    HeaderTitleText
        } from '../resources/StyledComponents';
import  {
    HEADER_TITLE_TEXT_H1
        }from '../resources/String';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitleText>{HEADER_TITLE_TEXT_H1}</HeaderTitleText>
        </HeaderContainer>
    );
}
 
export default Header;