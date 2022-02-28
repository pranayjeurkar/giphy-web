import styled from 'styled-components';

export const CardContainer = styled.div`
    flex-grow: 1;
    margin: 2px;
    height: 200px;
    cursor: pointer;
`;

export const CardImage = styled.img`
    max-width: fit-content;
    border-radius: 1rem;
    padding: 2px;
    height: 200px;
    object-fit: cover;
    max-width: 100%;
    min-width: 100%;
    vertical-align: bottom;
`;