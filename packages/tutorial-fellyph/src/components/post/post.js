import React from 'react';
import { styled } from 'frontity';

export const Post = ({ post }) => {
    return (
        <Box>
            <h2>{post.title.rendered}</h2>
        </Box>
    )
}


const Box = styled.article`
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    max-width: 900px;
    margin-bottom: 48px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.05);
    background-color: #fdf6eb;
    color: #0d405b;

    h2 {
        font-family: baumansregular, sans-serif;
        line-height: 1.1;
        color:#0d405b;
        font-size: 2rem;
        margin-top: 8px;
    }
`;