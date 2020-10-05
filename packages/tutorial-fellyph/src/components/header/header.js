import React from 'react'
import { styled } from 'frontity';

export const Header = ({ title }) => {
    return (
        <HeaderContainer>
            <h1>{title}</h1>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    background-color: #082737;
    color: #FBEED9;
    font-weight: bold;
    margin: 0 0 20px 0;
    padding: 1em;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.05);

    h1 {
        font-size: 2rem;
        text-transform: uppercase;
        font-family: baumansregular,sans-serif;
        text-align: center;
        letter-spacing: 4px;
        line-height: 1.5;
        color: #FCB458;
        margin: 0;
    }
`;