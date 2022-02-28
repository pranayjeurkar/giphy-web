import { memo, useContext } from "react";
import { ErrorContainer, TryAgainButton, ErrorMsg } from "./styled";
import { ThemeContext } from '../../App';

const ErrorWrapper = () => {
    const ThemeContextVal = useContext(ThemeContext);
    const tryAgainClicked = () => {
        window.location.reload(false);
    }

    return (
        <ErrorContainer className="">
            <ErrorMsg className={ThemeContextVal.theme}>Whoops! Something went wrong.</ErrorMsg>
            <TryAgainButton onClick={tryAgainClicked}>Try Again</TryAgainButton>
        </ErrorContainer>
    )
}

export default memo(ErrorWrapper);