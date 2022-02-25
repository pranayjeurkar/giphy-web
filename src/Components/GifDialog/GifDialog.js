import { memo, useState, useContext } from "react";
import { DialogContainer, GifContainer, CloseButton, GifImage, PausePlayButton } from './styled';
import { ThemeContext } from '../../App';
import play_button from '../../images/play_button.png';

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
            <GifContainer onClick={onImageClick}>
                <GifImage src={toggleClick ? gif.images.original_still.url : gif.images.original.webp} alt={gif.title} />
                {toggleClick && <PausePlayButton src={play_button} alt={`Playing Gif ${gif.title}`} />}
            </GifContainer>
        </DialogContainer>
    )
}

export default memo(GifDialog);