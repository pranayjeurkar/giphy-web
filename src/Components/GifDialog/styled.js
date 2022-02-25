import styled from 'styled-components';

export const DialogContainer = styled.div`
position: fixed;
z-index: 1;
background-color: rgb(0, 0, 0, 0.7);
height: 100%;
width: 100%;
left: 0;
top: 0;
overflow: hidden;
`;

export const GifContainer =  styled.div`
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
`;

export const CloseButton =  styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    font-size: 3rem;
    margin: 1rem;
    &:hover, &:focus {
        &.light {
            color: black;
        }
        &.dark {
            color: lightgrey;
        }
        text-decoration: none;
        cursor: pointer;
    }
`;

export const GifImage =  styled.img`
`;

export const PausePlayButton = styled.img`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 2rem;
width: 2rem;
`;