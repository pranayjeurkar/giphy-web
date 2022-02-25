import { memo } from "react";
import loading_spiner from '../../images/loading_spinner.gif';
import { LoaderContainer, LoaderImg } from './styled';

const Loader = ({loaderRef}) => {
    return (
        <LoaderContainer>
            <LoaderImg src={loading_spiner} alt="" ref={loaderRef} />
        </LoaderContainer>
    )
}

export default memo(Loader);