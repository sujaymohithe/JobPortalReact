import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    position: relative;
    max-height: 100px;
    height: 48px;
    z-index: 1030;
    background-color: #01929f;
`;

const Nav = styled.div`
    font-family: 'Graphik-Regular';
    font-size: inherit;
`;

const Logo = styled.a`
    transition: width 0.3s ease-in-out;
    display: block;
    float: left;
    height: 48px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: auto;
    font-family: 'Graphik-Semibold';
    padding: 0 21px;
    font-weight: 300;
    overflow: hidden;
    text-decoration: none;
    color: #fff;
`;

class Header extends React.Component {
    render() {
        return (<HeaderWrapper>
            <Nav>
                <Logo data-test="ImgLogo" href="/">HEY JOBS</Logo>
            </Nav>
        </HeaderWrapper >);
    }
}

export default Header;