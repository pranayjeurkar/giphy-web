import styled from 'styled-components';

export const ErrorContainer = styled.div`
position: absolute;
left: 50%;
top: 30%;
transform: translate(-50%, -50%);
`;

export const TryAgainButton = styled.div`
display: flex;
justify-content: center;
color: red;
font-size: 1rem;
cursor: pointer;
font-weight: 400;
`;

export const ErrorMsg = styled.div`
font-size: 2rem;
font-weight: 400;
&.dark {
    color: lightgrey;
}
@media (min-width: 600px) and (max-width: 900px) {
    font-size: 1.25rem;
}
@media screen and (max-width: 600px) {
    font-size: 1rem;
}
`;