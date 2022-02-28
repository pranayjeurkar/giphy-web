import styled from 'styled-components';

export const SearchWrapper = styled.input`
width: 100%;
margin: 10px;
height: 2rem;
font-size: 1rem;
border-radius: 4px;
&.dark {
    background-color: black;
    border: 2px solid lightgrey;
    color: lightgrey;
}
&.light {
    background-color: lightyellow;
    border: 2px solid black;
    color: black;
}
`;