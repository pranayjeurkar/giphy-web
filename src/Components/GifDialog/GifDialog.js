import { memo, useState, useContext } from "react";
import { DialogContainer, GifContainer, CloseButton, GifImage, PausePlayButton } from './styled';
import { ThemeContext } from '../../App';

const GifDialog = (props) => {
    const { gif, onCloseClick } = props;
    const ThemeContextVal = useContext(ThemeContext);
    const [toggleClick, setToggleClick] = useState(true);
    const onImageClick = () => {
        setToggleClick(!toggleClick);
    }

    return (
        <DialogContainer>
            <CloseButton className={ThemeContextVal.theme} onClick={onCloseClick}>&times;</CloseButton>
            <GifContainer>
                <GifImage src={toggleClick ? gif.images.original_still.url : gif.images.original.webp} alt={gif.title} onClick={onImageClick} />
                <PausePlayButton>pause</PausePlayButton>
            </GifContainer>
            {/* <PausePlayButton>pause</PausePlayButton> */}
        </DialogContainer>
    )
}

export default memo(GifDialog);